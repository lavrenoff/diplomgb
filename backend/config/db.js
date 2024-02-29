require('dotenv').config()

const mariadb = require('mariadb')
const pool = mariadb.createPool({
    // host: process.env.HOST_IP,
    // host: 'localhost',
    host: '147.78.65.79',
    port: process.env.PORT,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 5
});


module.exports = Object.freeze({
    pool: pool
});



