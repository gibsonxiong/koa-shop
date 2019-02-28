/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('refund', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    refundNo:{
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    orderItemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    userId:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    // 1-仅退款 2-退货退款 3-换货
    type: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '1'
    },
    //状态 1-已申请 2-同意申请
    status: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '1'
    },
    //原因
    reason: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    //退款金额
    refundFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    refundDesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    //退款凭证
    refundImgList: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    //申请时间
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'refund'
  });
};