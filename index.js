const express = require("express");
const app = express();
const port = 8000;

const db = require("./models");

const supplierRoutes = require("./routes/supplier");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/",supplierRoutes);

// app.use("/products",productRoutes);

app.listen(port, ()=>{
    console.log(`Server connected at port ${port}`);
});

db.sequelize.sync()
.then(()=>{
    console.log("Database connect...");
})
.catch(error =>{
    console.log(error);
});
