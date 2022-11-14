const {getProducts: datagetProducts, getProductsByCategory:datagetProductsByCategory} = require('../data/data.products');

const getProducts =async()=>{
    try {
        const response = await datagetProducts();
        return response[0];
    } catch (error) {
        return error;
    }
}

const getProductsByCategory =async(id)=>{
    try {
        const response = await datagetProductsByCategory(id);
        return response[0];
    } catch (error) {
        return error;
    }
}

module.exports = {
    getProducts,
    getProductsByCategory
}