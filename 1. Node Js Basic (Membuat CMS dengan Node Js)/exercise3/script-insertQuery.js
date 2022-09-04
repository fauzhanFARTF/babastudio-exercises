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

    sql = "INSERT INTO product (nama_produk, gambar_produk, harga_product, des_product, createdate) VALUES ('sepatu sneaker', 'sneaker.jpg', 200000, 'kami menjual sepatu berkualitas semua ukuran', '2020-01-17'), ('sepatu pentofel', 'pentofel.png', 500000, 'kami menjual sepatu pentofel 2020', '2020-01-30')";
    //  id_product tidak ditulis dikarenakan sudah diset AUTO INCREMENT

    connection.query(sql, function(err, result){
        if (err){
            throw err;
        }
        console.log('Record Berhasil di Insert');
        connection.destroy();
    });
});