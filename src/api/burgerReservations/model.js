const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema({
        title: {
            type: String,
            default: 'Prenotazione',
            required: false,
        },
        menus: {
            type: Array,
            default: []
        },
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

module.exports = mongoose.model('burgerReservations', schema)
