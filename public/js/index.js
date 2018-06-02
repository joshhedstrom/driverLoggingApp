$(document).ready(function() {

    //LOG IN------------------------------------------------------------------------>>

    $('#new-user-submit').click(function(e) {
        e.preventDefault()

        $.get("/signup", function(data) {
            let username = $('#new-user-username').val().trim();
            let password = $('#new-user-password').val().trim();

            let user = {
            	username: username,
            	password: password
            }

            $.post("/signup", user, function() {

            })
        });
    });


});