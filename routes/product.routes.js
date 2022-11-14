const { Router }  = require("express");
const router = Router();
const { getProducts, getProductsByCategory } = require("../controllers/product.controllers");


router.get('/products', getProducts);
router.get('/products/category/:id', getProductsByCategory);

module.exports = {
    router
};