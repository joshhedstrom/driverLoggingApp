const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // All trips
    app.get("/api/:id/trips/", function(req, res) {
        db.Trips.findAll({})
            .then(function(dbTrips) {
                console.log("All Trips:" + dbTrips);
                res.json(dbTrips);
            })
    })

    // Delete a Trip
    app.delete("/api/trips/:id", function(req, res) {
        db.Trips.destroy({where: {
            id: req.params.id
        }
    }).then(function(dbTrips) {
            
            res.json(dbTrips)
                console.log("Delete from Trip Table: " + dbTrips);
            });

    })

    // Update a Trip
    app.put("/api/trips/:id", (req, res) => {
        db.Trips.update({where: 
        {id: req.params.id}
        },
        req.body).then((dbTrips) => {
            res.json(dbTrips);
        });
    });            


    // Add a new trip
    app.post("/api/trips/", function(req, res) {
        db.Trips.create(req.body).then(function(dbTrips) {
            res.json(dbTrips);
        })

    })


      //Get user Data
    app.post("/api/user/:id", function(req, res) {

        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then((arg) => {

        })

    })
    
}

