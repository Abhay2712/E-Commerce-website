const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

// Create new order
// POST /api/orders
// private
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
    if(orderItems && orderItems.length===0){
        res.status(400)
        throw new Error('No items in order')
        return
    }
    else{
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder)
    }
});

module.exports = { addOrderItems };