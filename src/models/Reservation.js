const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
    line: {
        type: String,
        enum : ['1','2-5','6+'],
        default: '1'
    },
    hourlyCost: {
        type: Number,
        enum : [20,15,12],
        default: 20
    },
    endDate: {
        type: Date,
        required: true
    }
},
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

module.exports = mongoose.model('Reservation', schema)
