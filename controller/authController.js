const path = require('path');
const db = require('../models')

var exports = module.exports = {}

exports.login = function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
}

exports.user = function(req, res) {
    res.json({
        'id': req.user.id,
        'username': req.user.username
    })
}

exports.dashboard = function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}