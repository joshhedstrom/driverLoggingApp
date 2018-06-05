$(document).ready(function() {

    let userID = sessionStorage.getItem('userID');
    let username = sessionStorage.getItem('username')
    console.log('userID: ', userID);
    console.log('username: ', username)


    // $().removeAttr("tabindex");

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

    $("#shiftstart").on("click", function(e) {
        e.preventDefault();
        console.log('Shift started')

        startingOdo = $("#starting").val().trim();

        // if (startingOdo.length < 1) {
        //     $("#starting").after('<span class="error">This field is required</span>');
        // } else if (typeof startingOdo != "number") {
        //     $("#starting").after('<span class="error">Please enter a valid input</span>');
        // } else {
        //     console.log("Starting Odometer Miles: " + startingOdo);
        //     $("#starting").val("");
        // }

        console.log("Starting Odometer Miles: " + startingOdo);
        $("#starting").val("");
    })

    $("#shiftend").on("click", function(e) {
        e.preventDefault();
        console.log('Shift ended')

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
        tripHourlyWage = Math.abs(tripTips / tripHours);

        console.log("Miles this trip: " + tripMiles);
        console.log("Tips Collected: $" + tripTips);
        console.log("Hours Worked: " + tripHours);
        console.log("Hourly Wage: $" + tripHourlyWage);
        console.log("Description: " + tripDescription);


        let newTrip = {
            user: username,
            userid: userID,
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

    function submitTrip(newTrip) {
        $.post("/api/trips", newTrip, function() {

        location.reload();
        })
    }

    // Get trips from database and updates view
    function getTrips() {
        $.get(`/api/${userID}/trips`, function(data) {
            console.log("trips", data);
            trips = data;

            if (!trips || !trips.length) {
                emptyTable();
            } else {
                mostRecent();
                // fillTable();
            }
        });
    }
    getTrips();
    

    // Most recent trip table
    function mostRecent() {
        let tripsToAdd = [];
        for (let i = 0; i < trips.length; i++) {
            tripsToAdd.push(trips[i]);
        }

        for (let j = 0; j < tripsToAdd.length; j++) {

            let tripUser = tripsToAdd[j].user;
            let tripStartingOdo = tripsToAdd[j].startingOdometer
            let tripEndingOdo = tripsToAdd[j].endingOdometer
            let tripMiles = tripsToAdd[j].miles;
            let tripTips = tripsToAdd[j].tips;
            let tripHours = tripsToAdd[j].hours;
            let tripHourlyWage = tripsToAdd[j].wage;
            let tripDescription = tripsToAdd[j].description;


            $("#new-trip-table > tbody").html("<tr><td>" + tripUser + "</td><td>" + tripStartingOdo +
                "</td><td>" + tripEndingOdo + "</td><td>" + tripMiles + "</td><td>" + tripTips +
                "</td><td>" + tripHours + "</td><td>" + tripHourlyWage + "</td></tr>");


        }
    }

    // Fill all trips from database into trips Table
    function fillTable() {
        // $("#all-trips-table").empty();

        let tripsToAdd = [];
        for (let i = 0; i < trips.length; i++) {
            tripsToAdd.push(trips[i]);
        }

        for (let j = 0; j < tripsToAdd.length; j++) {
            
            tripUser = tripsToAdd[j].user;
            tripStartingOdo = tripsToAdd[j].startingOdometer
            tripEndingOdo = tripsToAdd[j].endingOdometer
            tripMiles = tripsToAdd[j].miles;
            tripTips = tripsToAdd[j].tips;
            tripHours = tripsToAdd[j].hours;
            tripHourlyWage = tripsToAdd[j].wage;
            tripDescription = tripsToAdd[j].description;
            
            

            $("#all-trips-table > tbody").append("<tr><td>" + tripUser + "</td><td>" + tripStartingOdo +
                "</td><td>" + tripEndingOdo + "</td><td>" + tripMiles + "</td><td>" + tripTips +
                "</td><td>" + tripHours + "</td><td>" + tripHourlyWage + "</td>" + "<td><button class=btn btn-small delete>X</button></td>" + "</tr>");

        };

        
    }

    $("#all-trips-table").hide();

    $("#btnAllTrips").click(function() {
        // $("#all-trips-table").empty();
        $("#all-trips-table").toggle();
        fillTable();
    });

   

    // Display message when no trips have been entered into the database
    function emptyTable() {
        container.empty();
        let messageH2 = $("<h2>");
        messageH2.addClass("message");
        messageH2.css({
            "text-align": "center",
            "margin-top": "50px"
        });
        messageH2.html("No recent trip has been entered");
        container.append(messageH2);
    }

    // Form validation
    function validate_form() {
        valid = true;
        if (`${trip_form.starting}` === "") {
            alert("Please fill out Starting Odometer.");
            valid = false;
        }
        return valid;
    }

    // Delete a trip
    function deleteTrip() {
        event.stopPropagation();
        var id = $(this).data("id");
        $.delete({url: "/api/trips/" + id})
        .then(fillTable);
    }

});