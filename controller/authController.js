const path = require('path');
const db = require('../models')

var exports = module.exports = {}


exports.signup = function(req, res) {

    res.sendFile(path.join(__dirname, "../public/signup.html"));

}

exports.login = function(req, res) {

    res.sendFile(path.join(__dirname, "../public/index.html"));

}

exports.user = function(req, res) {
    console.log('USER ID:::::>> ', req.user.id)

    // app.post("/api/user/:id", function(req, res) {

    // 	db.User.findOne({
    // 		where: {
    // 			id: req.params.id
    // 		}
    // 	})

    //    })

    res.sendFile(path.join(__dirname, "../public/main.html"));

}

exports.trips = function(req, res) {
    console.log('USER ID:::::>> ', req.user.id)


    res.sendFile(path.join(__dirname, "../public/trips.html"));

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });

}