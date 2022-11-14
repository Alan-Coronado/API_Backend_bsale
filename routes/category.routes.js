const { Router }  = require("express");
const router = Router();

const {getCategories} = require('../controllers/category.controllers');

router.get('/categories', getCategories);

module.exports = {
    router
};