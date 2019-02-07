module.exports = {
    ensureAuthenticated:function(res,req,next){
        if(res.isAuthenticated()){
            return next();
        }
        req.redirect('/login');
    }
}