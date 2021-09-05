const auth = require('../auth/middleware/auth');
const express = require('express')
const User = require('./model')
const router = express.Router()
const _ = require('lodash')

router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password -__v");
        res.send(user);
    } catch (error) {
        console.log(error);
        res.send("An error occured");
    }
});

module.exports = router;
