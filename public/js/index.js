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

    //SIGN UP----------------------------------------------------------------------->>

    $('#login-submit').click(function(e) {
        e.preventDefault()

        $.get("/login", function(data) {
            let username = $('#login-username').val().trim();
            let password = $('#login-password').val().trim();
            console.log(username, ' || ', password)

            let user = {
            	username: username,
            	password: password
            }

            $.post("/login", user, function(data, status) {
            	if (status){
            		console.log('good')
            		// location.redirect('/user')
            	}

            })
        });
    });


});