const db = require('../db');
const {
    models
} = db;
const Promise = require('bluebird');
const utils = require('../utils');
const flashbuyCtrl = require('../controllers/flashbuy');
const schedule = require('node-schedule');
let {scheduleCache} = require('../utils/schedule');

//提交订单
const orderCtrl = {
    async create(userId, params) {
        if (!userId) throw new Error('未找到该用户');

        let {
            itemParams,
            addressId,
            couponId,
            remark
        } = params;

        //地址
        let address;
        if (addressId) {
            address = await models.user_addr.findById(addressId);
        }

        //没有选地址，使用默认地址
        if (!address) {
            address = await models.user_addr.findOne({
                where: {
                    userId,
                    isDefault: true
                }
            });
        }

        //没有默认地址,使用第一个地址
        if (!address) {
            address = await models.user_addr.findOne({
                where: {
                    userId
                }
            });
        }

        if (!address) throw new Error('收货地址不能为空');

        //订单商品
        let itemFee = 0;
        let itemCount = 0;
        let postFee = 0;
        let orderItems = [];
        let deductPrice = 0;
        let orderFee = 0;

        await Promise.each(itemParams, async param => {
            let {
                itemId,
                skuId,
                quantity
            } = param;

            let item = await models.item.findById(itemId);
            let sku = await models.sku.findById(skuId);

            //限时抢购
            let flash = await flashbuyCtrl.getFlash(item.flashbuyId, itemId, skuId);

            //合计
            let price = flash && flash.status == 1 ? flash.sku.flashPrice : sku.price;
            itemFee += price * quantity;
            itemCount += quantity;

            orderItems.push({
                item,
                sku,
                quantity,
                flash
            })
        });

        //优惠券
        let couponList = await models.user_coupon.findAll({
            where: {
                userId,
                used: false
            },
            include: [{
                model: models.coupon,
                where: {
                    limitPrice: {
                        $lte: itemFee + postFee
                    },
                    endTime: {
                        $gte: Date.now()
                    }
                }
            }]
        });
        //优惠券减免
        let coupon;
        if (couponId != '' && couponId != null) {
            coupon = couponList.find(item => item.id == couponId);

            if (!coupon) throw new Error('该优惠券不存在或者不适用');

            deductPrice = coupon.coupon.deductPrice;

        } else {
            couponId = undefined; //处理空字符串不能插入问题
        }

        orderFee = itemFee - deductPrice;

        //开启事务
        let orderRow;
        await db.transaction(async (t) => {
            //主订单
            orderRow = await models.order.create({
                userId,
                orderNo: utils.genOrderNo(),
                status: '1',
                title: `商品订单(${itemCount}件)`,
                receiverName: address.name,
                receiverPhone: address.phone,
                receiverProvince: address.province,
                receiverCity: address.city,
                receiverArea: address.area,
                receiverDetailAddr: address.detailAddr,
                remark: remark,
                itemCount,
                itemFee,
                postFee,
                orderFee,
                discountFee: deductPrice,
                userCouponId: couponId,
            }, {
                transaction: t
            });

            //购物车清除
            let shopcartIds = itemParams.map(item => item.shopcartId).filter(item => !!item);
            if (shopcartIds.length > 0) {
                let num = await models.shopcart.destroy({
                    where: {
                        id: {
                            $in: shopcartIds
                        },
                        userId
                    },
                    transaction: t
                });

            }

            //更新优惠券状态
            if (couponId) {
                let [num] = await models.user_coupon.update({
                    used: true
                }, {
                    where: {
                        id: couponId,
                        used: false
                    },
                    transaction: t
                });

                if (num === 0) throw new Error('使用优惠券出错');
            }


            //子订单插入数据
            let orderItemData = [];

            await Promise.each(orderItems, async orderItem => {

                //减库存
                let sku = await models.sku.findById(orderItem.sku.id, {
                    transaction: t
                });

                if (sku.quantity == 0 || sku.quantity < orderItem.quantity) throw new Error('库存不足');

                await sku.decrement('quantity', {
                    by: orderItem.quantity,
                    transaction: t
                });

                //如果是限时抢购商品
                if (orderItem.flash && orderItem.flash.status == 1) {
                    let flashItem = orderItem.flash.item;

                    if (flashItem.quantity - flashItem.soldCount == 0) throw new Error('限时抢购商品已抢完')

                    if (orderItem.quantity > flashItem.quantity - flashItem.soldCount) throw new Error('限时抢购数量不足');

                    //增加销量
                    await models.flashbuy_item.increment('soldCount', {
                        where: {
                            id: orderItem.flash.item.id
                        },
                        by: orderItem.quantity,
                        transaction: t
                    })
                }

                let price = orderItem.flash && orderItem.flash.status == 1 ? orderItem.flash.sku.flashPrice : orderItem.sku.price;
                orderItemData.push({
                    orderId: orderRow.id,
                    itemImg: orderItem.item.imgList[0],
                    itemId: orderItem.item.id,
                    skuId: orderItem.sku.id,
                    itemName: orderItem.item.name,
                    itemPropvalues: orderItem.sku.propvalueTextList,
                    itemPrice: price,
                    quantity: orderItem.quantity
                });
            });

            let orderItemRows = await models.order_item.bulkCreate(orderItemData, {
                transaction: t
            });

            //定时任务-超时自动取消订单
            let endDate = utils.adjustDate(orderRow.createTime, 's', 10);
            scheduleCache[`cancel_${orderRow.id}`] = schedule.scheduleJob(endDate, function () {
                try {
                    let res = orderCtrl.cancel(userId, orderRow.id, '系统自动取消');

                    if (res.code !== 0) throw new Error(res.message);
                } catch (err) {
                    console.log('系统自动取消订单失败');
                    console.log(err);
                }
            });

        });



        return {
            code: 0,
            data: {
                orderId: orderRow.id
            },
            msg: '订单创建成功'
        }
    },

    //取消订单
    async cancel(userId, orderId, cancelReason) {
        let order = await models.order.findOne({
            where: {
                id: orderId,
                userId: userId
            },
            include: [{
                model: models.order_item
            }]
        });

        if (!order) throw new Error('该订单不存在');
        if (order.status !== '1') throw new Error('订单状态异常');

        await db.transaction(async (t) => {

            await order.update({
                status: '9',
                endTime: Date.now(),
                cancelReason
            }, {
                transaction: t
            });

            await Promise.each(order.order_items, async orderItem => {

                //恢复库存
                let sku = await models.sku.findById(orderItem.skuId, {
                    transaction: t
                });

                if (!sku) return;

                await sku.increment('quantity', {
                    by: orderItem.quantity,
                    transaction: t
                });
            });

            //取消定时任务-自动取消订单
            if (scheduleCache[`cancel_${orderId}`]) {
                scheduleCache[`cancel_${orderId}`].cancel();
                delete scheduleCache[`cancel_${orderId}`];
            }
        });

        return {
            code: 0,
            data: null,
            msg: '取消订单成功'
        }
    }
};


module.exports = orderCtrl;