const mongoose = require("mongoose")


const gameSchema = new mongoose.Schema({
    title: String,
    images: Array,
    body: String,
    rating: Number,
    platforms: Array,
    category: String,
})


const Game = mongoose.model("game", gameSchema)

module.exports = Game