const db = require("../models");

const createSupplier = async (req, res) =>{
    const {name, lname} = req.body;
    const newSupplier = await db.Suppliers.create({ // Suppliers คือชื่อ module ที่ export ออกมา
        name,
        lname
    });
    res.status(201).send(newSupplier);
}

const getAllSuppliers = async (req, res) =>{
    const allSuppliers = await db.Suppliers.findAll();
    res.status(200).send(allSuppliers);
}
const getSupplierByID = async (req,res) =>{
    const targetID = req.params.id;
    const targetSupplier = await db.Suppliers.findOne({where:{id:targetID}});
    res.status(200).send(targetSupplier);
}
const updateSuppliers = async (req, res) =>{
    const targetID = req.params.id;
    const {name, lname} = req.body;
    const targetSupplier = await db.Suppliers.findOne({where:{id:targetID}});
    if(targetSupplier){
        targetSupplier.update({name,lname});
        res.status(200).send({message:`Suppliers ID:${targetID} has been updated`});
    }else{
        res.status(404).send({message:`Not found ID:${targetID}`});
    }
}
const deleteSupplier = async (req, res) =>{
    const targetID = req.params.id;
    const targetSupplier = await db.Suppliers.findOne({where:{id:targetID}});
    if(targetSupplier){
        await targetSupplier.destroy();
        res.status(200).send({message:"Update"});
    }else{
        res.status(404).send();
    }
}
module.exports = {createSupplier, getAllSuppliers, getSupplierByID,updateSuppliers,deleteSupplier};
