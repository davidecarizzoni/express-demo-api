const express = require('express')
const Post = require('./src/models/Post')
const router = express.Router()

//POSTS
router.get('/posts', async (req, res) => {
    const posts = await Post.find().exec()
    res.send(posts)
})
router.post('/posts', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    await post.save()
    res.send(post)
})
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById( req.params.id )
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})
router.put("/posts/:id", async (req, res) => {
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
    try {
        await Post.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})

module.exports = router
