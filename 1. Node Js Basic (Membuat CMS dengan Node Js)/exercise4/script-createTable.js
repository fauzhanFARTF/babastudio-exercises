// Javascript SourceCode

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"m4suk4j4h",
    database: "ecommerce" 
});

connection.connect(function(err){
    if (err) {
        throw err ;
    }
    console.log('Terkoneksi dengan sukses');

    sql = 'CREATE TABLE product (id_product INT(11) NOT NULL AUTO_INCREMENT, nama_produk VARCHAR(60) NOT NULL, gambar_produk VARCHAR(200) NOT NULL, harga_product INT(13) NOT NULL, des_product TEXT NOT NULL, createdate DATE NOT NULL, PRIMARY KEY (id_product))';
    connection.query(sql, function(err, result){
        if (err){
            throw err;
        }
        console.log('Tabel Telah Dibuat');
        connection.destroy();
    });
});