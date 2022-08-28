const express = require('express');
const router = express.Router();
const {
  getProducts,
  getSearchedProducts,
} = require('../controllers/productController');

router.get('/', getProducts);
router.get('/search', getSearchedProducts);

module.exports = router;
