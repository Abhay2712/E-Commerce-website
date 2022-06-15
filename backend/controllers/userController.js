const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// Auth user and get token
// POST /api/users/login
// public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken({ id: user._id })
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
});

// Register a new user
// POST /api/users
// public
const registerUser = asyncHandler(async (req, res) => {
    const { name,email, password } = req.body;

    const userExists = await User.findOne({ email });
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        isAdmin: false
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken({ id: user._id })
        })
    }
    else{
        res.status(500)
        throw new Error('Error creating user')
    }

    
});

// GET user profile
// POST /api/users/profile
// private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }
    else {
        res.status(401)
        throw new Error('User not found')
    }
});

module.exports = { authUser, getUserProfile,registerUser };