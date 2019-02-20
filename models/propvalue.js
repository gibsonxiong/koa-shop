/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('propvalue', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    propnameId: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'propvalue'
  });
};
