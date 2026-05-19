const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String 
    },
    image: {
        type: String
    }
});


const categoryModel = mongoose.model("category", categorySchema);
module.exports = categoryModel;