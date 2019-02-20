/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('item', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    categoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    imgList: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    propvalueList: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    detail: {
      type: DataTypes.STRING(10000),
      allowNull: true
    }
  }, {
    tableName: 'item'
  });
};