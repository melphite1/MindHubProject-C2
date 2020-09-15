const { string, boolean } = require("@hapi/joi")
const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    favGames: Array,
    favConsole: String,
    username: String,
    password: String,
    email: String,
    name: String,
    lastname: String,
    commentID: { type: mongoose.Types.ObjectId, ref: "Comment" },
    urlpic: String,
    logWithGoogle: Boolean,
    firstTime: Boolean,
})


const User = mongoose.model("User", UserSchema)

module.exports = User