/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('rate', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    orderItemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    itemImg: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    itemName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    itemPropvalues: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    itemPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    score: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rateImgList: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue:DataTypes.NOW
    },
  }, {
    tableName: 'rate'
  });
};