$(document).ready(function() {

    // Container holding all trips
    let container = $("#data");

    let trips;

    // Functions
    // =============================================================
    // Get trips from database and updates view
    function getTrips(day) {
        // let dayOfWeekString = day || "";
        // if (dayOfWeekString) {
        //     dayOfWeekString = "/day/" + dayOfWeekString;
        // }
        $.get("/api/trips", function(data) {
            console.log("trips", data);
            trips = data;
            
            if(!trips || !trips.length) {
                emptyTable();
            } else {
                // fillTable();
            }
        });
    }
    getTrips();

    // // Fill all trips from database into trips Table
    // function fillTable() {
    //     // tripsContainer.empty();

    //     let tripsToAdd = [];
    //     for(let i = 0; i < trips.length; i++) {
    //         tripsToAdd.push(trips[i]);
    //     }
        
    //     for(let j = 0; j < tripsToAdd.length; j++) {

    //         let tripDate = tripsToAdd[j].date;
    //         let tripDayOfWeek = tripsToAdd[j].dayOfWeek;
    //         let tripHours = tripsToAdd[j].hours;
    //         let tripTips = tripsToAdd[j].tips;
            
    //         $("#trips-table > tbody").append("<tr><td>" + tripsDate + "</td><td>" + tripsDayOfWeek + "</td><td>" + tripsHours + "</td><td>" + tripsTips + "</td></tr>");
    //     };
        
    // }

    // Display message when no trips have been entered into the database
    function emptyTable() {
        container.empty();
        let messageH2 = $("<h2>");
        messageH2.addClass("message");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("No trips have been entered");
        container.append(messageH2);
    }









});