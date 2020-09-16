const mongoose = require("mongoose")


const CommentSchema = new mongoose.Schema({
    content: String,
    userPic: String,
    username: String,
    idNews: { type: mongoose.Types.ObjectId, ref: "News" },
    idGame: { type: mongoose.Types.ObjectId, ref: "Game" },
})


const Comment = mongoose.model("Comment", CommentSchema)

module.exports = Comment