/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_item', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    orderId: {
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
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'order_item'
  });
};
