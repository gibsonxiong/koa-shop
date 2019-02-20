/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('region', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'region'
  });
};
