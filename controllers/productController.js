const Amazon = require('../models/amazonModel');
const Flipkart = require('../models/flipkartModel');
const Snapdeal = require('../models/snapdealModel');

const getProducts = async (req, res) => {
  const productsFromAmazon = await Amazon.find();
  const productsFromFlipkart = await Flipkart.find();
  const productsFromSnapdeal = await Snapdeal.find();
  res.json({
    status: 200,
    amazon: productsFromAmazon,
    flipkart: productsFromFlipkart,
    snapdeal: productsFromSnapdeal,
  });
};
const getSearchedProducts = async (req, res) => {
  const product = req.query.product;
  const searchedFromAmazon = await Amazon.find({ searchTag: product });
  const searchedFromFlipkart = await Flipkart.find({ searchTag: product });
  const searchedFromSnapdeal = await Snapdeal.find({ searchTag: product });
  res.json({
    status: 200,
    amazon: searchedFromAmazon,
    flipkart: searchedFromFlipkart,
    snapdeal: searchedFromSnapdeal,
  });
};

module.exports = { getProducts, getSearchedProducts };
