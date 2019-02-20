/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rate', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    }
  }, {
    tableName: 'rate'
  });
};
