const { Router }  = require("express");
const {router:productrouter} = require('./product.routes');
const {router:categoryrouter} = require('./category.routes');
const router = Router();

router.use(productrouter,categoryrouter);

module.exports = {
    router
};