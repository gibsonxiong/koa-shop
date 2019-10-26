/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('shop_role', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        shopId:{
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        permissions:{
            type: DataTypes.STRING(5000),
            allowNull: false,
            get(){
                return JSON.parse(this.getDataValue('permissions') || '[]')
            },
            set(val){
                this.setDataValue('permissions', JSON.stringify(val));
            },
            comment:'JSON格式'
        },
        isAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:false,
            comment:'是否拥有所有权限'
        }
    }, {
        tableName: 'shop_role'
    });
};