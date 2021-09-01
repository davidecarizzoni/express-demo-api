const express = require('express')
const Reservations = require('./src/models/Reservation')
const router = express.Router()


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

router.get('/reservations', async (req, res) => {
    const reservations = await Reservations.find().exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(reservations)
})

router.get('/reservations/:id', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const reservation = await Reservations.findById( req.params.id )
        res.send(reservation)
    } catch {
        res.status(404)
        res.send({ error: "Reservation doesn't exist!" })
    }
})

router.put("/reservations/:id", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const reservation = await Reservations.findOne({ _id: req.params.id })

        reservation.set(req.body);

        await reservation.save()
        res.send(reservation)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})
router.delete('/reservations/:id', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        await Reservations.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: `Reservations doesn't exist!` })
    }
})




module.exports = router
