require('dotenv').config()

const mysql = require('mysql2'); 
const connection = mysql.createConnection({
    host: process.env.HOST, 
    user: process.env.DBUSER,
    password: process.env.PASSWORD, 
    database: process.env.DATABASE
});

module.exports = connection; 