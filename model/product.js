const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  description: String,
  url: String,
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
