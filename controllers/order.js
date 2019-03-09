const db = require('../db');
const {
  models
} = db;
const Promise = require('bluebird');
const utils = require('../utils');

//商品统计
module.exports = {
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

            itemFee += sku.price * quantity;
            itemCount += quantity;

            item.setDataValue('imgList', item.imgList.split(','));
            orderItems.push({
                item,
                sku,
                quantity
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
                userCouponId: couponId
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

                orderItemData.push({
                    orderId: orderRow.id,
                    itemImg: orderItem.item.getDataValue('imgList')[0],
                    itemId: orderItem.item.id,
                    skuId: orderItem.sku.id,
                    itemName: orderItem.item.name,
                    itemPropvalues: orderItem.sku.propvalueTextList,
                    itemPrice: orderItem.sku.price,
                    quantity: orderItem.quantity
                });
            });

            let orderItemRows = await models.order_item.bulkCreate(orderItemData, {
                transaction: t
            });

        });
        return {
            code: 0,
            data: {
                orderId: orderRow.id
            },
            msg: '订单创建成功'
        }
    }
}