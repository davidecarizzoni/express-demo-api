const express = require('express')
const BurgerReservation = require('./model')
const router = express.Router()

//RESERVATIONS
router.post('/', async (req, res) => {

    let totalCost = 0
    req.body.menus.forEach((m) => {
        totalCost += m.totalCost
    })

    const burgerReservation = new BurgerReservation({
        title: req.body.title,
        menus: req.body.menus,
        totalCost: totalCost
    })
    try{
        await burgerReservation.save()
        res.json(burgerReservation)
    } catch (e){
        res.json({message:e})
    }
})

router.get('/', async (req, res) => {
    const burgerReservation = await BurgerReservation.find().sort('-created_at').exec()
    res.json(burgerReservation)
})

router.get('/:id', async (req, res) => {
    try {
        const burgerReservation = await BurgerReservation.findById( req.params.id )
        res.json(burgerReservation)
    } catch {
        res.status(404)
        res.json({ error: "Reservation doesn't exist!" })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await BurgerReservation.deleteOne({_id: req.params.id} )
        res.status(204).send({message: 'Reservation deleted'})
        } catch {
        res.status(404)
        res.json({ error: "Reservation doesn't exist!" })
    }
})

module.exports = router
