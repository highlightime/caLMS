var mysql = require('mysql');

const db = mysql.createPool({
    host:'ip-10-7-3-120',
    user:'admin',
    password:'123',
    database:'student'
})

module.exports = db;