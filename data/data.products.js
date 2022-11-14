const { promisePool } = require('../config/database.config');

const getProducts =async()=>{
    try {
        const response = await promisePool.query(`SELECT * FROM product;`);
        return response;
    } catch (error) {
        return error;
    }
}

const getProductsByCategory =async(id)=>{
    try {
        const response = await promisePool.query(`SELECT * FROM product WHERE category=${id};`);
        return response;
    } catch (error) {
        return error;
    }
}


module.exports = {
    getProducts,
    getProductsByCategory
};