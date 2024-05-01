import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    port: 33070,
    user: 'blog_user',
    database: 'blog_db',
    password: 'blog_password',
    waitForConnection: true, 
    connectionLimit: 10, 
    queueLimit: 0

})

export default pool