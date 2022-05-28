const express=require('express');
const products=require('./data/products');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const app=express();

connectDB();

app.get('/',(req,res)=>{
    res.send('Backend API is running...');
});

app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.get('/api/products/:id',(req,res)=>{
    const product=products.find(p=>p._id===req.params.id);
    res.json(product);
    
});

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
})