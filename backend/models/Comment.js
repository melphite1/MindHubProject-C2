const mongoose = require("mongoose")


const CommentSchema = new mongoose.Schema({
    content: String,
    userPic: String,
    userID:{type: mongoose.Types.ObjectId, ref: "User"},
    username: String,
    platforms: Array,
    category: String

})


const Comment = mongoose.model("Comment", CommentSchema)

module.exports = Comment