const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    content: String,
})

module.exports = mongoose.model("Post", schema)
