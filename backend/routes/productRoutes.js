const express=require('express');
const asyncHandler=require('express-async-handler');
const router=express.Router();
const Product=require('../models/productModel');

// Get all products
// GET /api/products
// public
router.get('/',asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    res.json(products);
}));

// Get single product
// GET /api/products:id
// public
router.get('/:id',asyncHandler(async(req,res)=>{
    const product= await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404);
        throw new Error('Product not found');
    }
    
}));

module.exports=router;
