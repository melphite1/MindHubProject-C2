const mongoose = require("mongoose")


const NewsSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    body: Array,
    images: String,
    date: String,
    // commentID:{type: mongoose.Types.ObjectId, ref: "Comment"},
})


const News = mongoose.model("News", NewsSchema)

module.exports = News