// npm install express --save

var ecommerce = require('express');
var app = ecommerce();
var conn  = require('express-myconnection');
var mysql = require('mysql');

var logger = require ('morgan');

var expressku = require('./routes/expressku');

app.set('port', process.env.port || 2000);
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use('/public',ecommerce.static(__dirname + '/public'));

app.use(
    conn(mysql, {
        host: '127.0.0.1',
        user: 'root',
        password: 'm4suk4j4h',
        port: '3306',
        database: 'babastudio_express_ecommerce'
    }, 'single')
)

app.get('/', function (req, res){
    res.send('Server is running on port ' + app.get('port'));
});

app.get('/ecommerce', expressku.home);
// app.get('/ecommerce', expressku.home2);
app.get('/ecommerce/products', expressku.products);
// app.get('/ecommerce/single', expressku.single);
app.get('/ecommerce/single/:id_product', expressku.single);
app.get('/ecommerce/contact', expressku.contact);
app.get('/ecommerce/typo', expressku.typo);
app.get('/ecommerce/checkout', expressku.checkout);

app.listen(app.get('port'), function(){
    console.log('Server is running on port ' + app.get('port'));
})