const mongoose = require('mongoose');

const snapdealSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    finalPrice: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    searchTag: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Snapdeal', snapdealSchema);
