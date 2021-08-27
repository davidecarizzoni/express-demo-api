const express = require('express')
require('dotenv').config();
const routes = require('./routes')
const mongoose = require('mongoose')

// Connect to MongoDB database
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use("/api", routes)

        app.listen(process.env.PORT, () => {
            console.log("Server has started!")
        })
    })

