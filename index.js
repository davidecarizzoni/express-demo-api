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
const reservationRoutes = require('./src/api/reservations/controller')
const postsRoutes = require('./src/api/posts/controller')
const auth = require('./src/api/auth/controller')
const users = require('./src/api/user/controller')
const burgerReservationsRoutes = require('./src/api/burgerReservations/controller')

//MIDDLEWARE
app.use('/reservations', reservationRoutes)
app.use('/posts', postsRoutes)
app.use('/auth', auth)
app.use('/users', users)
app.use('/burgerReservations', burgerReservationsRoutes)

// Connect to MongoDB database //INSERT IN HEROKU VARS
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connect') )

app.use(express.json())

app.listen(port, () => {
    console.log("Server has started!")
})

