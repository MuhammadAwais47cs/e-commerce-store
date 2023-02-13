const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  imgUrl: {
    type: String,
    required: [true, "Please Enter product imgUrl"],
  },
  price: {
    type: String,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  
});

module.exports = mongoose.model("Product", productSchema);