const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  date: { 
    type: Date, 
    default: Date.now 
},
});

module.exports = mongoose.model('Product', ProductSchema);