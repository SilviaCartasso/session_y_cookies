module.exports = (req, res, next) => {
    
    if(req.cookies.recordarColor && !req.session.user) {
        req.session.user = req.cookies.recordarColor;
        res.locals.user = req.session.user
    } 
    next();
}