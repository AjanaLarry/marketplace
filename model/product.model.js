const mongoose = require("mongoose");

/* const prodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
}); */

const prodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  category: {
    type: String,
  },
});

const Product = mongoose.model("Product", prodSchema);

module.exports = Product;
