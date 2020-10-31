const router = require("express").Router();
const SupplierController = require("../controllers/supplier");

router.post("/suppliers", SupplierController.createSupplier);
router.get("/suppliers", SupplierController.getAllSuppliers);
router.get("/suppliers/:id", SupplierController.getSupplierByID);
router.put("/suppliers/:id", SupplierController.updateSuppliers);
router.delete("/suppliers/:id", SupplierController.deleteSupplier);
module.exports = router;