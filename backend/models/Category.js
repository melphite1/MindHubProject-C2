const mongoose = require("mongoose")


const CategorySchema = new mongoose.Schema({
    name: String,
    picCategory: String,
  
})


const Category = mongoose.model("Category", CategorySchema)

module.exports = Category