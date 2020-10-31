module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
        name: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING
        },
        price: {
            allowNull: false,
            type: DataTypes.FLOAT
        }
    }, {
        tableName: "Products",
        timestamps: false
    });

    Products.associate = models => {
        Products.belongsTo(models.Suppliers, { foreignKey: "Suppliers_id" });
    };

    return Products;
}