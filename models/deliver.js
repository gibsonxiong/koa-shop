module.exports = function (sequelize, DataTypes) {
    return sequelize.define('deliver', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING(30),
            allowNull: false,
            
        },
        phone: {
            type: DataTypes.STRING(30),
            allowNull: false,
            comment:'公司电话'
        }
    }, {
            tableName: 'deliver'
        });
};