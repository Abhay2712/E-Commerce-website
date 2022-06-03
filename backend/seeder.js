const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users=require("./data/users");
const products=require("./data/products");
const User=require("./models/userModel");
const Product=require("./models/productModel");
const Order=require("./models/orderModel");
const connectDB=require("./config/db");

dotenv.config()

connectDB();

const importData=async()=>{
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();   //delete all the data in the database

        const createdUsers=await User.insertMany(users);
        const adminUser=createdUsers[0]._id;
        const sampleProducts=products.map(product=>{
            return {...product,user:adminUser} ;
        })
        await Product.insertMany(sampleProducts);
        console.log("Data Imported Successfully");
 
        process.exit();
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

const destroyData=async()=>{
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();   //delete all the data in the database
        console.log("Data Destroyed Successfully");
 
        process.exit();
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

if (process.argv[2]==='-d'){
    destroyData();
}
else{
    importData();
}
