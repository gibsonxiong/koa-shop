/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_addr', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provinceId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cityId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    area: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    areaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    detailAddr: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'user_addr'
  });
};
