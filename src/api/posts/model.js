const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
)

module.exports = mongoose.model("Post", schema)
