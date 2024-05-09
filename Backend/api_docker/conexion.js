// import mysql from 'mysql2/promise'
const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'mysql',
    port: 3306,
    user: 'blog_user',
    database: 'blog_db',
    password: 'blog_password',
    waitForConnections: true, 
    connectionLimit: 10, 
    queueLimit: 0

})

module.exports = pool