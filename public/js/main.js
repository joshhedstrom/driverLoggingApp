$(document).ready(function() {

    // Container holding all trips
    let container = $("#data");

    let trips;

    let startingMiles;
    let endingMiles;
    let tripTips;
    let tripMiles;

    $("#shiftstart").on("click", function() {
        event.preventDefault();
        startingMiles = $("#starting").val().trim();
        console.log(startingMiles);
        $("#starting").val("");
    })

    $("#shiftend").on("click", function() {
        event.preventDefault();
        endingMiles = $("#ending").val().trim();
        tripTips = $("#tips").val().trim();

        console.log(endingMiles);
        

        $("#ending").val("");
        $("#tips").val("");


        tripMiles = Math.abs(startingMiles - endingMiles);
        console.log("Miles this trip: " + tripMiles);
        console.log("Tips Collected: $" + tripTips);


        let newTrip = {
            user: "Dan",
            miles: tripMiles,
            tips: tripTips
    
        }
        submitTrip(newTrip);
    })

    

    function submitTrip(trip) {
        $.post("/api/trips", trip, function() {

        })
        location.reload();
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
            let tripMiles = tripsToAdd[j].miles;
            let tripTips = tripsToAdd[j].tips;
            
            // let tripDescription = tripsToAdd[j].description;
            
            $("#new-trip-table > tbody").append("<tr><td>" + tripUser + "</td><td>" + tripMiles + "</td><td>" + tripTips + "</td><td>" + tripDescription + "</td></tr>");
        };
        
    }

    // Display message when no trips have been entered into the database
    function emptyTable() {
        container.empty();
        let messageH2 = $("<h2>");
        messageH2.addClass("message");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("No trips have been entered");
        container.append(messageH2);
    }


})