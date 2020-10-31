module.exports = (sequelize, DataTypes) => {
    const Suppliers = sequelize.define("Suppliers", {
        name: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING
        },
        lname: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        tableName: "Supplierss",
        timestamps: false
    });

    Suppliers.associate = models => {
        Suppliers.hasMany(models.Products, { foreignKey: "Suppliers_id" });
    };

    return Suppliers;
}