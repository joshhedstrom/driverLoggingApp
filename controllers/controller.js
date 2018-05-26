let express = require("express");
let router = express.Router();

//Routes
router.use(function(req, res, next) {
    console.log('Time:', Date.now())
    next()
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