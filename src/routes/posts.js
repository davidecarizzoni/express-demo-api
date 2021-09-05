const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await Post.find().exec()
    res.send(posts)
})
router.get('/:id', async (req, res) => {
    const post = await Post.findOne({_id: req.params.id}).exec()
    res.send(post)
})

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        })
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (e) {
        res.json({message: e})
    }
})

router.put("/:id", async (req, res) => {
    try {
       const post = await Post.findOne({_id: req.params.id})
       post.set(req.body)

       await post.save
       res.json(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})

module.exports = router
