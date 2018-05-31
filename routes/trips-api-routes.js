const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // All trips
    app.get("/api/trips/", function(req, res) {
        db.Trips.findAll({})
            .then(function(dbTrips) {
                console.log("All Trips:" + dbTrips);
                res.json(dbTrips);
            })
    })

    // Delete a Trip
    app.delete("/api/trips/", function(req, res) {
        
        // console.log(req.body);
        db.Trips.destroy(req.body).then(function(dbTrips) {
            where: {
                id: req.params.id
            }
            res.json(dbTrips)
                console.log("Delete from Trip Table: " + dbTrips);
            });
    })  

    // Add a new trip
    app.post("/api/trips/", function(req, res) {
        db.Trips.create(req.body).then(function(dbTrips) {
            res.json(dbTrips);
        })

    })


}