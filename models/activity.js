module.exports = function (sequelize, DataTypes) {
    return sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        registerStartTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        registerEndTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        startTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
            tableName: 'activity'
        });
};