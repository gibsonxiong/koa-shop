/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    shopId:{
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    orderNo:{
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    status:{
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '1',
      comment:'订单状态: 1-待支付 2-待发货 3-待收货 4-已完成（未评价） 5-已完成（已评价） 9-已取消'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    receiverName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    receiverPhone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    receiverProvince: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receiverCity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receiverArea: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receiverDetailAddr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    itemCount:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    itemFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    postFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    orderFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    discountFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    userCouponId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cancelReason:{
      type: DataTypes.STRING(20),
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue:DataTypes.NOW
    },
    payTime:{
      type: DataTypes.DATE,
      allowNull: true,
    },
    deliverCompanyId:{
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    deliverPostNo:{
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliverTime:{
      type: DataTypes.DATE,
      allowNull: true,
    },
    endTime:{
      type: DataTypes.DATE,
      allowNull: true,
    }
  }, {
    tableName: 'order'
  });
};
