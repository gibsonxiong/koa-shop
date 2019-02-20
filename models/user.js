/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    nickname:{
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    gender:{
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '0'
    },
    balance:{
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'user'
  });
};
