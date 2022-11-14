require('dotenv').config()

const mysql = require('mysql2');
const pool = mysql.createPool({
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD 
});
const promisePool = pool.promise();

/*module.exports = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT
};*/

module.exports = {
    promisePool
};