const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Auth user and get token
// POST /api/users/login
// public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // if (user && (await user.isValidPassword(password))) {
    //     res.json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         isAdmin: user.isAdmin,
    //         token: null
    //     })
    // }
    // else {
    //     res.status(401)
    //     throw new Error('Invalid credentials')
    // }
    res.send(JSON.stringify(email))

    // if (!user) {
    //     res.status(401);
    //     throw new Error('Invalid email');
    // }
    // const isMatch = (await User.matchPassword(password));
    // if (!isMatch) {
    //     res.status(401);
    //     throw new Error('Invalid password');
    // }
    // const token = user.generateToken();
    // res.json({
    //     _id: user._id,
    //     name: user.name,
    //     email: user.email,
    //     isAdmin: user.isAdmin,
    //     token: null
    // });

});

module.exports = { authUser };