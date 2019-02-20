/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('propname', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'propname'
  });
};
