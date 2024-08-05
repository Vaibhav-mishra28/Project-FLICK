document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate the login form fields (you can add more validation if needed)
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter both username and password.");
            return;
        }

        // If validation passes, you can submit the form to the server
        alert("Login successful!"); // Replace this with your actual login logic
    });
});
