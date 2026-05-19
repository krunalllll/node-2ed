// productModel.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  price: {
    type: String,
  },

  image: {
    type: String,
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;