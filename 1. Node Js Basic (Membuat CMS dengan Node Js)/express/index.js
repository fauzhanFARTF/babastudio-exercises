/* 14  Ganti semua file HTML menjadi ejs */
/* 15. Install Modul EJS dengan mengetikkan npm install ejs --save  */
/* 26. Install Modul modul nodemon agar kita tidak perlu mematikan dan menghidupkan server kita 
    perintahnya npm install nodemon -g --save
*/
/* 30. Install modul express-myconnection dengan perintah 'npm install express-myconnection --save' */
/* 31. Install modul mysql dengan perintah 'npm install mysql --save' */
/* Buka file expressku.js dan tambahkan script */
/* 39. Install modul ejs-lint untuk medefnisikan <%- dengan cara npm install -g ejs-lint */


/* 1 */ var express = require('express');
/* 2 */ var app = express();
/* 27 */ var conn  = require('express-myconnection');
/* 28 */ var mysql = require('mysql');

/* Cara membuat report/log file-file statis yg dimuat oleh browser (Modul Morgan) */
/* 11  install modul morgan dengan mengetikkan perintah npm install morgan --save */
/* 12 */var logger = require('morgan'); // berfungsi memanggil modul morga dan memasukkanya ke dalam variabel logger 
/* 33 */var path =require('path');
// /* 40 */const ejsLint = require('ejs-lint');
/* 16 Buat File expressku.js didalam folder routing dan buatlah sebuah method home
/* menghubungkan file expressku ke dalam javascript; middleware expressku berasal dari file expressku.js yang di include dan disimpan dalam variabel expressku */
/* 17 */ var expressku = require('./routes/expressku');
/* 35 */ var adminku = require('./routes/adminku')

/* port 3000 tersebut mengartikan port alternatif jika port environment tidak diketahui atau tidak ditemukan
sintaks 'process.env.port berfungsi untuk setting port berdasarkan port environment pada app service  */
/* 5 */ app.set('port', process.env.port || 3000);
/* 18 */ app.set('view engine', 'ejs');

/* 13 */app.use(logger('dev'));// 3. berfungsi untuk memuat fungsi middlweare morgan pada object logger () dan setting report/log dalam format 'developer'

/* sintaks __dirname merupakan direktori skrip yang sedang berjalan, sedangkan '/public' adalah nama folder tempat file statis berada */
/* 9 */ /* 25 */ /* 34 */ //app.use('/public', express.static(__dirname + '/public'));

/* 35 */ app.use('/public', express.static(path.join(__dirname, 'public'))); // Method join pada modul path berfungsi untuk menggabungkan path

/* 29 */ app.use(
            conn(mysql, {
                host: '127.0.0.1',
                user: 'root',
                password: 'm4suk4j4h',
                port: '3306',
                database: 'babastudio_express_db'
            }, 'single')
        )

// respon text/html berasal dari fungsi respon dibawah ini
/* 3 */ app.get('/', function (req, res){
            // res.send('Server is running on port 8080');
            /* 6 */ res.send('Server is running on port ' + app.get('port'));
            // /* 25 */ res.send("Servernya udah running bosquh.. !");
        });

// Sintaks untuk membuat route ‘/express’ dengan handler method home pada modul expressku
/* 19 */ app.get('/express', expressku.home); // hanya menangani request untuk path '/express'
/* 20 */ app.get('/express/news', expressku.news); // hanya menangani request untuk path '/express'
/* 32 */ app.get('/express/news_detail/:id_news', expressku.news_detail); // hanya menangani request untuk path '/express'
/* 21 */ app.get('/express/about', expressku.about); // hanya menangani request untuk path '/express'
/* 22 */ app.get('/express/contact', expressku.contact); // hanya menangani request untuk path '/express'
/* 23 */ app.get('/express/gallery', expressku.gallery); // hanya menangani request untuk path '/express'
/* 24 */ // Ganti link a_href di masing-masing ejs

/* 36 */ app.get('/express/admin', adminku.login); // hanya menangani request untuk path '/express'
/* 37 */ app.get('/express/admin/login', adminku.login); // hanya menangani request untuk path '/express'
/* 38 */ app.get('/express/admin/home', adminku.home); // hanya menangani request untuk path '/express'

/* 40 */ app.get('/express/admin/add_news', adminku.add_news);
/* 41 */ app.get('/express/admin/edit_news', adminku.edit_news);


/* 4 */ //app.listen(8000, function(){
/* 7 */  app.listen(app.get('port'), function(){
            // console.log('Server is running on port 8000');
            /* 8 */ console.log('Server is running on port ' + app.get('port'));
        });

