const mongoose = require("mongoose")


const gameSchema = new mongoose.Schema({
    title: String,
    images: Array,
    body: String,
    rating: Number,
    platforms: Array,
    idCategory: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },

})


const Game = mongoose.model("game", gameSchema)

module.exports = Game