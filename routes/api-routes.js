const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // All shifts
    app.get("/api/trips/", function(req, res) {
        db.Trips.findAll({})
            .then(function(dbTrips) {
                console.log(dbTrips);
                res.json(dbTrips);
            })
    })

    // // Specific shifts on day of week
    // app.get("/api/shifts/dayOfWeek/:dayOfWeek", function(req, res) {
    //     db.Shifts.findAll({
    //         where: {
    //             dayOfWeek: req.params.dayOfWeek
    //         }
    //     })
    //         .then(function(dbShifts) {
    //             console.log(dbShifts);
    //             res.json(dbShifts);
    //         })
    // });

    // // Add a shift
    // app.post("/api/shifts/", function(req, res) {
    //     db.Shifts.create({
    //         date: req.body.date,
    //         dayOfWeek: req.body.dayOfWeek,
    //         hours: req.body.hours,
    //         tips: req.body.tips
    //     })
    //         .then(function(dbShift) {
    //             res.json(dbShift);
    //         })
    // })












}