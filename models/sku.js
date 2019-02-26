/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sku', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    propvalueList: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    propvalueTextList:{
      type: DataTypes.STRING(255),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'sku'
  });
};
