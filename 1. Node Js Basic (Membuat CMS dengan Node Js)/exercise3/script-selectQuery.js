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

    sql = "SELECT * FROM product";
    connection.query(sql, function(err, result, fields){
        if (err){
            throw err;
        }
        
        console.log(result);
        connection.destroy();
    });
});