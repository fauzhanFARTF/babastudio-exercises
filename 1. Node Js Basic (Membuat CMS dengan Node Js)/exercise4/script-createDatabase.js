// Source Codes - fauzan urrachman

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"m4suk4j4h",
});

connection.connect(function(err){
    if (err){
        throw err
    }
});
console.log('Terkoneksi dengan Sukses');

sql = 'CREATE DATABASE ecommerce';

connection.query(sql, function(err,result){
    if (err){
        throw err;
    }
    console.log('Database Telah Dibuat');
    connection.destroy();
});

// jalankan di terminal/cmd n
// node script-createDatabase.js
