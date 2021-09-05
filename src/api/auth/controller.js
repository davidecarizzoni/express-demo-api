const express = require('express')
const User = require('../user/model')
const bcrypt = require('bcryptjs')
const router = express.Router()
const _ = require('lodash')

router.post('/register', async(req, res) => {

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User ({
        name: req.body.name,
        email: _.toLower(req.body.email),
        password: encryptedPassword,
        role: req.body.role
    })
    try{
        await user.save()
        res.json(user)
    } catch (e) {
        res.json({message: e})
    }
})

router.post('/login', async(req, res)=>{

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({message: 'Invalid email or password'});

    const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!validPassword)
        return res.status(400).json({message: 'Invalid email or password'});

    const token = user.generateAuthToken();
    res.send(token);

})


module.exports = router
