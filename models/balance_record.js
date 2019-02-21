/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('balance_record', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    userId: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    behavior:{
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    change:{
      type: DataTypes.DECIMAL(10,2),
      allowNull:false,
    },
    remark:{
      type:DataTypes.STRING(100),
      allowNull:true,
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue:DataTypes.NOW
    },
  }, {
    tableName: 'balance_record'
  });
};
