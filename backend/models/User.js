const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    favGames: Array,
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname:String,
    idComment: mongoose.Types.ObjectId, ref: "Comment",
    country: String
})


const User = mongoose.model("User", UserSchema)

module.exports = User