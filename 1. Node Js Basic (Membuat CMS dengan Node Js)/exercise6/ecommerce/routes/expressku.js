exports.home = function (req,res){
    // res.render('home');
    req.getConnection(function(err,connect){
        sql = 'SELECT * FROM product'
        var query = connect.query(sql, function(err, rows){
            if (err){
                console.log('Error Message: %', err);
            }
            res.render('home', {
                page_title: 'Ecommerce',
                data: rows
            })
        })
        // sql2 = 'SELECT * FROM product_slider'
        // var query2 = connect.query(sql2, function(err, rows){
        //     if (err){
        //         console.log('Error Message: %', err);
        //     }
        //     res.render('home', {
        //         page_title: 'Ecommerce',
        //         data2: rows
        //     })
        // })   
        
    })
};
// exports.home2 = function (req,res){
//     // res.render('home');
//     req.getConnection(function(err,connect){
//         sql = 'SELECT * FROM product_slider'
//         var query = connect.query(sql, function(err, rows){
//             if (err){
//                 console.log('Error Message: %', err);
//             }
//             res.render('home', {
//                 page_title: 'Ecommerce',
//                 data2: rows
//             })
//         })
//     })
// };

exports.products = function (req,res){
    // res.render('products');
    req.getConnection(function(err,connect){
        sql = 'SELECT * FROM product'
        var query = connect.query(sql, function(err, rows){
            if (err){
                console.log('Error Message: %', err);
            }
            res.render('products', {
                page_title: 'Express Ecommerce - product',
                data: rows
            })
        })
    })
};
exports.single = function (req,res){
    // res.render('single');
        var id_product = req.params.id_product;
        req.getConnection(function(err, connect){
                var query = connect.query('SELECT * FROM product JOIN product_images ON product.id_product = product_images.id_product WHERE product_images.id_product =?', id_product, function (err, rows){
                    if (err){
                        console.log('Error Message: %', err);
                    }
        res.render('single', {
                        page_title: 'Express Ecommerce - product detail',
                        data: rows 
                    }); 
                });
            });
    }; 
exports.contact = function (req,res){
    res.render('contact');
};
exports.typo = function (req,res){
    res.render('typo');
};
exports.checkout = function (req,res){
    res.render('checkout');
};