const {getCategories: datagetCategories} = require('../data/data.categories');

const getCategories =async()=>{
    try {
        const response = await datagetCategories();
        return response[0];
    } catch (error) {
        return error;
    }
};

module.exports = {
    getCategories
};