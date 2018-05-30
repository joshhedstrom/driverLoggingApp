const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // All trips
    app.get("/api/trips/", function(req, res) {
        db.Trips.findAll({})
            .then(function(dbTrips) {
                console.log(dbTrips);
                res.json(dbTrips);
            })
    })

}