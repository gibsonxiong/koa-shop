/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('rate_like', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rateId: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },
  }, {
    tableName: 'rate_like'
  });
};