/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop_user', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    shopId:{
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    shopRoleId:{
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    nickname:{
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    tableName: 'shop_user'
  });
};
