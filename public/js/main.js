$(document).ready(function() {

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
        tripTips = $("#wages").val().trim();

        console.log(endingMiles);
        

        $("#ending").val("");
        $("#wages").val("");


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
    }
    


})