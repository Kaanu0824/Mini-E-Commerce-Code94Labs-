const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
// router.get('/search', productController.searchProductsById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.deleteProductById);


module.exports = router;