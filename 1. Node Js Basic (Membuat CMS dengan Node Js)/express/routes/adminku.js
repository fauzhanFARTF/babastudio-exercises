/* 1 */ exports.login = function(req, res){
            res.render('./admin/index');
        };

/* 2 */ exports.home = function(req, res){
/* 3 */     res.render('./admin/home',{
                pathname: 'home'
             });
        };

/* 4 */ exports.add_news = function(req, res) {
            res.render('./admin/home', {
                pathname: 'add_news'
            });
        };
/* 5 */ exports.edit_news = function(req, res) {
            res.render('./admin/home', {
                pathname: 'edit_news'
            });
        };