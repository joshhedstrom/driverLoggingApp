const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.get("/user", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/main.html"));
    })

    app.get("/trips", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/trips.html"));
    })

    //Auth WILL BE EDITED LATER

    // app.get('/signup', function(req, res) {
    //     res.render('signup', {
    //         message: req.flash('signupMessage')
    //     });
    // });


    // app.post('/signup', passport.authenticate('local-signup', {
    //     successRedirect: '/profile',
    //     failureRedirect: '/signup',
    //     failureFlash: true
    // }));

    // app.get('/profile', isLoggedIn, function(req, res) {
    //     res.render('profile', {
    //         user: req.user
    //     });
    // });

    // app.get('/logout', function(req, res) {
    //     req.logout();
    //     res.redirect('/');
    // });

    // function isLoggedIn(req, res, next) {
    //     if (req.isAuthenticated())
    //         return next();
    //     res.redirect('/');
    // }









}