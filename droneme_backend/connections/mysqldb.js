const mysql = require('mysql')

const mysqldb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'droneme',
    port: '3306'
})

module.exports = mysqldb