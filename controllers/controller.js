let express = require("express");
let router = express.Router();
let path = require("path");

//Routes
router.use(function(req, res, next) {
    console.log('Time:', Date.now())
    next()
})

// Index Page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

// Main Page
router.get("/user/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
})

// Show all user's trips
router.get("/user/api/trips", function(req, res) {

})

// Show user's specific trip
router.get("/user/api/trips/:id", function(req, res) {

})

// Create new trip
router.post("/user/api/trips", function(req, res) {

})

// Edit trip
router.put("/user/api/trips/:id", function(req, res) {

})

// Delete trip
router.delete("/user/api/trips/:id", function(req, res) {

})

module.exports = router;