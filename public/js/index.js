$(document).ready(function() {

    //SIGN UP----------------------------------------------------------------------->>

    $('#new-user-submit').click(function(e) {
        e.preventDefault()

        $.get("/signup", function(data) {
            let username = $('#new-user-username').val().trim();
            let password = $('#new-user-password').val().trim();

            let user = {
                username: username,
                password: password
            }

            // $.post("/signup", user, function() {

            // })
        });
    });

    //LOG IN------------------------------------------------------------------------>>

    $('#returning-user-submit').click(function(e) {
        e.preventDefault()

        // $.post("/login", function(data) {
            let username = $('#returning-user-username').val().trim();
            let password = $('#returning-user-password').val().trim();

            let user = {
                username: username,
                password: password
            }

            $.post("/login", user, function(data) {
                sessionStorage.setItem('userID', data.id)
                //THEN REDIRECT TO /user
            })
        // });
    });




    // $.get("/user", function(data) {

    // });


});