module.exports = function (sequelize, DataTypes) {
    return sequelize.define('flashbuy_item_sku', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        shopId:{
            type: DataTypes.INTEGER(10),
            allowNull: true
          },
        flashbuyItemId: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        skuId: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '0.00'
        },
        flashPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '0.00'
        }


    }, {
            tableName: 'flashbuy_item_sku'
        });
};