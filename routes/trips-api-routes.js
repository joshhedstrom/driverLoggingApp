const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // All trips
    // app.get("/api/trips/", function(req, res) {
    //     db.Trips.findAll({})
    //         .then(function(dbTrips) {
    //             console.log(dbTrips);
    //             res.json(dbTrips);
    //         })
    // })









    // Delete a Trip
    app.get("/api/trips/", function(req, res) {
        
        console.log(req.body);
        db.Trips.destroy(req.body).then(function(dbTrips) {
            where: {
                id: req.params.id
            }
            res.json(dbTrips)
                console.log(dbTrips);
            });
            
    })

}