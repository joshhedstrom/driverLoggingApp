const path = require("path");
const authController = require('../controller/authController.js');


module.exports = function(app, passport) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })


    app.get("/trips", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/trips.html"));
    })

//AUTH----------------------------------------------------------------------------------->>>>>>

    app.get('/signup', authController.signup);


    app.get('/login', authController.login);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/user',
        failureRedirect: '/signup'
    }));


    app.get('/user', isLoggedIn, authController.user);


    app.get('/logout', authController.logout);


    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/user',
        failureRedirect: '/login'
    }));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }

}