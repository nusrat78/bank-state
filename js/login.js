document.getElementById('login-submit').addEventListener
    ('click', function () {
        // get user email
        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value;

        // get user password
        const passField = document.getElementById('user-pass');
        const userpass = passField.value;


        if (userEmail == 'faltu@gmail.com' && userpass == 'secret') {
            window.location.href = 'bank-account.html';

        }

    })


