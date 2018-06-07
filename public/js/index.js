$(document).ready(function() {

    //SIGN UP----------------------------------------------------------------------->>

    $('#new-user-submit').click(function(e) {
        e.preventDefault()

        let username = $('#new-user-username').val().trim();
        let password = $('#new-user-password').val().trim();

        let user = {
            username: username,
            password: password
        }

        $.post("/signup", user, function(data) {
            sessionStorage.setItem('userID', data.id)
            sessionStorage.setItem('username', data.username)
            window.location.replace('/dashboard')
        })
    });

    //LOG IN------------------------------------------------------------------------>>

    $('#returning-user-submit').click(function(e) {
        e.preventDefault()

        let username = $('#returning-user-username').val().trim();
        let password = $('#returning-user-password').val().trim();

        let user = {
            username: username,
            password: password
        }

        $.post("/login", user, function(data) {
            sessionStorage.setItem('userID', data.id)
            sessionStorage.setItem('username', data.username)
            window.location.replace('/dashboard')
        })
    });

});