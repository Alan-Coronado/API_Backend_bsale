const { promisePool } = require('../config/database.config');

const getCategories =async()=>{
    try {
        const response = await promisePool.query(`SELECT * FROM category`);
        return response;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getCategories
};