const express = require('express')
const User = require('./model')
const router = express.Router()

router.post('/register', async(req, res) => {
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })
    try{
        await user.save()
        res.json(user)
    } catch (e) {
        res.json({message: e})
    }
})

module.exports = router
