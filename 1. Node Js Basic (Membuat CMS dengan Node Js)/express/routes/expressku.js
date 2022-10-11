/* 1 */ exports.home = function (req, res){
/* 6 */    req.getConnection(function(err, connect){
                sql = 'SELECT * FROM news_tbl LIMIT 6'
                var query = connect.query(sql, function (err, rows){
                    if (err){
                        console.log('Error Message: %', err);
                    }
/* 7 */             res.render('home', {
                        page_title: 'Express News',
                        data: rows // Hasil query tersebut disimpan dalam argumen respon 'rows' yang dapat dipanggil sebagai value data pada baris 10
                    }); /* berfungsi untuk merender template home.ejs pada folder views */
                });
            });

        } // fungsi res.render() pada method home middleware,'expressku'

/* 2 */ exports.news = function (req, res){
/* 8 */    req.getConnection(function(err, connect){
                var query = connect.query('SELECT * FROM news_tbl', function (err, rows){
                    if (err){
                        console.log('Error Message: %', err);
                    }
/* 9 */             res.render('news', {
                        page_title: 'Express News - news',
                        data: rows // Hasil query tersebut disimpan dalam argumen respon 'rows' yang dapat dipanggil sebagai value data pada baris 10
                    }); /* berfungsi untuk merender template home.ejs pada folder views */
                });
            });
        } // fungsi res.render() pada method home middleware,'expressku'

/* 10 */ exports.news_detail = function (req, res){
/* 13 */        var id_news = req.params.id_news; // berfungsi menangkap parameter masukan 'id_news'
/* 11 */        req.getConnection(function(err, connect){
                    var query = connect.query('SELECT * FROM news_tbl WHERE id_news=?', id_news, function (err, rows){
                        if (err){
                            console.log('Error Message: %', err);
                        }
/* 12 */         res.render('news_detail', {
                        page_title: 'Express News - News Detail',
                        data: rows // Hasil query tersebut disimpan dalam argumen respon 'rows' yang dapat dipanggil sebagai value data pada baris 10
                    }); /* berfungsi untuk merender template home.ejs pada folder views */
                });
            });
/* 14 */   // res.render('news_detail');
        } // fungsi res.render() pada method home middleware,'expressku'

/* 3 */ exports.about = function (req, res){
            res.render('about'); /* berfungsi untuk merender template home.ejs pada folder views */
        } // fungsi res.render() pada method home middleware,'expressku'
        
/* 4 */ exports.contact = function (req, res){
            res.render('contact'); /* berfungsi untuk merender template home.ejs pada folder views */
        } // fungsi res.render() pada method home middleware,'expressku'

/* 5 */ exports.gallery = function (req, res){
            res.render('gallery'); /* berfungsi untuk merender template home.ejs pada folder views */
        } // fungsi res.render() pada method home middleware,'expressku'

