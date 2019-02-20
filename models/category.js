/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    parentId: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'category'
  });
};
