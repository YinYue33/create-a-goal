exports.isLoggedIn = (req, res, next) => {  
    if (req.isAuthenticated())
        return next();  
    res.status(401).send('Login first!')
}


exports.isSelf = (req, res, next) => { 
    if(req.user.id == req.params.id) return next();
    res.status(401).send('You can\'t ever access others information');
}