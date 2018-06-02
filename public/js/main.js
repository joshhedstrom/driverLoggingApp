$(document).ready(function() {

    // Container holding all trips
    let container = $("#data");

    let trips;

    let startingOdo;
    let endingOdo;
    let tripTips;
    let tripMiles;
    let tripHours;
    let tripHourlyWage;
    let tripDescription;

    $("#shiftstart").on("click", function() {
        event.preventDefault();
        startingOdo = $("#starting").val().trim();
        console.log("Starting Odometer Miles: " + startingOdo);
        $("#starting").val("");
    })

    $("#shiftend").on("click", function() {
        event.preventDefault();
        endingOdo = $("#ending").val().trim();
        tripTips = $("#tips").val().trim();
        tripHours = $("#hours").val().trim();
        tripDescription = $("#description").val().trim();

        console.log("Ending Odometer Miles: " + endingOdo);
        

        $("#ending").val("");
        $("#tips").val("");
        $("#hours").val("");
        $("#description").val("");


        tripMiles = Math.abs(startingOdo - endingOdo);
        tripHourlyWage = Math.abs(tripTips/tripHours);

        console.log("Miles this trip: " + tripMiles);
        console.log("Tips Collected: $" + tripTips);
        console.log("Hours Worked: " + tripHours);
        console.log("Hourly Wage: $" + tripHourlyWage);
        console.log("Description: " + tripDescription);


        let newTrip = {
            user: "Dan",
            startingOdometer: startingOdo,
            endingOdometer: endingOdo,
            miles: tripMiles,
            tips: tripTips,
            hours: tripHours,
            wage: tripHourlyWage,
            description: tripDescription
        }
        submitTrip(newTrip);
    })

    

    function submitTrip(trip) {
        $.post("/api/trips", trip, function() {

        })
        // location.reload();
    }
    

    //

    // Get trips from database and updates view
    function getTrips(day) {
        $.get("/api/trips", function(data) {
            console.log("trips", data);
            trips = data;
            
            if(!trips || !trips.length) {
                emptyTable();
            } else {
                fillTable();
            }
        });
    }
    getTrips();

    // Fill all trips from database into trips Table
    function fillTable() {
        // tripsContainer.empty();

        let tripsToAdd = [];
        for(let i = 0; i < trips.length; i++) {
            tripsToAdd.push(trips[i]);
        }
        
        for(let j = 0; j < tripsToAdd.length; j++) {

            let tripUser = tripsToAdd[j].user;
            let tripStartingOdo = tripsToAdd[j].startingOdometer
            let tripEndingOdo = tripsToAdd[j].endingOdometer
            let tripMiles = tripsToAdd[j].miles;
            let tripTips = tripsToAdd[j].tips;
            let tripHours = tripsToAdd[j].hours;
            let tripHourlyWage = tripsToAdd[j].wage;   
            let tripDescription = tripsToAdd[j].description;
            
            $("#new-trip-table > tbody").html("<tr><td>" + tripUser + "</td><td>" + tripStartingOdo
            + "</td><td>" + tripEndingOdo + "</td><td>" + tripMiles + "</td><td>" + tripTips
            + "</td><td>" + tripHours + "</td><td>" + tripHourlyWage + "</td></tr>");
            
        };
        
    }

    // Display message when no trips have been entered into the database
    function emptyTable() {
        container.empty();
        let messageH2 = $("<h2>");
        messageH2.addClass("message");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("No recent trip has been entered");
        container.append(messageH2);
    }


})