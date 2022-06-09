const express = require('express');
const router = express.Router();

// const asyncHandler=require('express-async-handler');
const { authUser } = require('../controllers/userController');

router.post('/login', authUser);
module.exports = router;
