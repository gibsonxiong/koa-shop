module.exports = function (sequelize, DataTypes) {
    return sequelize.define('flashbuy', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        registerStartTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        registerEndTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        publicTime:{
            type: DataTypes.DATE,
            allowNull: false,
            comment:'公开时间'
        },
        startTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0'
        },
    }, {
            tableName: 'flashbuy'
        });
};