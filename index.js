const express = require('express')
const routes = require('./routes')
const mongoAtlasUri ='mongodb+srv://admin:YJXghvdgNqG4vgZm@cluster0.rha3y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const mongoose = require('mongoose')

// Connect to MongoDB database
mongoose
    .connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use("/api", routes)

        app.listen(3000, () => {
            console.log("Server has started!")
        })
    })

