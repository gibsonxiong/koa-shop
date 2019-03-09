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
      type: DataTypes.STRING(100),
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
      type: DataTypes.STRING(2000),
      allowNull: false,
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
      type: DataTypes.TEXT,
      allowNull: true
    },
  
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue:DataTypes.NOW  
    },
  }, {
    tableName: 'item'
  });
};