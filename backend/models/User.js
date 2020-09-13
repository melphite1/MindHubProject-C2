const { string } = require("@hapi/joi")
const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    favGames: Array,
    favConsole: String,
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String,
    commentID: { type: mongoose.Types.ObjectId, ref: "Comment" },
    country: String,
    urlpic: String
})


const User = mongoose.model("User", UserSchema)

module.exports = User