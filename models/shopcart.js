/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shopcart', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    skuId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'shopcart'
  });
};
