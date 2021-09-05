const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema;

const schema = new Schema({
        name: {
            type: String,
            required: true,
            minlength: 6,
        },
        email: {
            type: String,
            match: /^\S+@\S+\.\S+$/,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: [6, 'Password must be at least 6 characters'],
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            required: true,
            default: 'user'
        }
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
)


schema.methods.generateAuthToken =  () => {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY);
    return token;
};


module.exports = mongoose.model('User', schema)
