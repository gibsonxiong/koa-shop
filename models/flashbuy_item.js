module.exports = function (sequelize, DataTypes) {
    return sequelize.define('flashbuy_item', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        flashbuyId: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        itemId: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        itemImg: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        itemName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        itemPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '0.00'
        },
        flashPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '0.00'
        },
        itemMaxPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '0.00'
        },
        flashMaxPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '0.00'
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0'
        },
        quantity: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0',
            comment: '活动商品件数'
        },
        soldCount: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0',
            comment: '已售件数'
        },
        limitBuyCount: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            comment: '限购件数'
        },


    }, {
            tableName: 'flashbuy_item'
        });
};