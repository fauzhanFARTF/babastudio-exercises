// Javascript Source Code

const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log('Time: ', Date.now());
    next();
});

app.use('/product', function(req, res, next){
    console.log('Request Type :', req.method);
    next();
});

app.use('/detailproduct', function(req, res, next){
    console.log('Request Type :', req.method);
    next();
});

app.get('/', function(req, res){
    console.log('Ini adalah Halaman Home');
    res.send('Ini adalah Halaman Home');
});

app.get('/product', function(req, res){
    console.log('Ini adalah Halaman Produk');
    res.send('Ini adalah Halaman Produk');
});

app.get('/detailproduct', function(req, res){
    console.log('Ini adalah Halaman Detail Produk Toko Anda');
    res.send('Ini adalah Halaman Detail Produk Toko Anda');
});

app.listen(8000, function(){
    console.log('Aplikasi ini berjalan pada port 8000!')
})