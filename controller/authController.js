const path = require('path');

var exports = module.exports = {}


exports.signup = function(req, res) {

    res.sendFile(path.join(__dirname, "../public/signup.html"));

}

exports.login = function(req, res) {

    res.sendFile(path.join(__dirname, "../public/index.html"));

}

exports.user = function(req, res) {

    res.sendFile(path.join(__dirname, "../public/main.html"));

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });

}