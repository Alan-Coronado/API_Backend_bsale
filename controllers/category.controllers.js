const {getCategories:servicegetCategories} = require('../services/category.service');

const getCategories =async(req, res)=>{
    try {
        const response = await servicegetCategories();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getCategories
};