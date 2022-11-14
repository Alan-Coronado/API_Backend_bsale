const {getProducts:servicegetProducts, getProductsByCategory:servicegetProductsByCategory} = require('../services/product.services');

const getProducts =async(req, res)=>{
    try {
        const response = await servicegetProducts();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const getProductsByCategory =async(req, res)=>{
    try {
        const {id} = req.params;
        const response = await servicegetProductsByCategory(id);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProductsByCategory
};