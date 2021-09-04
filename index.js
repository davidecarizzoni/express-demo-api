const express = require('express')
require('dotenv').config();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

//ROUTER
const reservationRoutes = require('./src/routes/reservations')
const postsRoutes = require('./src/routes/posts')

//MIDDLEWARE
app.use('/reservations', reservationRoutes)
app.use('/posts', postsRoutes)

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connect') )

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log("Server has started!")
})

