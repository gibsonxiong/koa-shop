/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('footprint', {
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
    itemImg: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    itemName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    itemPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    createTime:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue:DataTypes.NOW  
    }
  }, {
    tableName: 'footprint'
  });
};
