const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        default: '',
        required: true,
    },
    startDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    line: {
        type: String,
        enum : ['1','2-5','6+'],
        default: '1',
        required: true
    },
    dailyCost: {
        type: Number,
        enum : [20,15,12],
        default: 20,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        default: null
    },
},
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

module.exports = mongoose.model('Reservation', schema)
