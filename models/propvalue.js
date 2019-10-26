/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('propvalue', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    shopId:{
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    propnameId: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    remark:{
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue:0
    },
  }, {
    tableName: 'propvalue'
  });
};
