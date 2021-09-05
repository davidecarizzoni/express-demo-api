const express = require('express')
require('dotenv').config();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 8080;
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
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connect') )

app.use(express.json())

app.listen(port, () => {
    console.log("Server has started!")
})

