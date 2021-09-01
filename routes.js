const express = require('express')
const Post = require('./src/models/Post')
const Product = require('./src/models/Products')
const Reservations = require('./src/models/Reservation')
const router = express.Router()

//POSTS
router.get('/posts', async (req, res) => {
    const posts = await Post.find().exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(posts)
})
router.post('/posts', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    await post.save()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(post)
})
router.get('/posts/:id', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const post = await Post.findById( req.params.id )
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})
router.put("/posts/:id", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const post = await Post.findOne({ _id: req.params.id })

        post.set(req.body);

        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})
router.delete('/posts/:id', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        await Post.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: `Post doesn't exist!` })
    }
})

//PRODUCTS
router.get('/products', async (req, res) => {
    const products = await Product.find().exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(products)
})
router.post('/products', async (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })
    await product.save()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(product)
})
router.get('/products/:id', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const product = await Product.findById( req.params.id )
        res.send(product)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})
router.put('/products/:id', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const product = await Product.findOne({ _id: req.params.id })

        product.set(req.body);

        await product.save()
        res.send(product)
    } catch {
        res.status(404)
        res.send({ error: "Products doesn't exist!" })
    }
})
router.delete('/products/:id', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        await Product.deleteOne({_id: req.params.id})
        res.status(200).send()
    } catch {
        res.status(404)
        res.send({error: `Products doesn't exist!`})
    }
})

//RESERVATIONS
router.post('/reservations', async (req, res) => {
    const reservation = new Reservations({
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
    })
    await reservation.save()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(reservation)
})




module.exports = router
