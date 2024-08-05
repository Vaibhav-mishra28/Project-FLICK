
    document.addEventListener("DOMContentLoaded", function () {
        var signUpForm = document.querySelector(".signup-form");

        signUpForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Validate the form fields
            if (validateForm()) {
                // If validation passes, you can submit the form to the server
                alert("Form submitted successfully!"); // Replace this with your actual form submission logic
            }
        });

        function validateForm() {
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Simple validation
            if (username.trim() === "") {
                alert("Please enter a username.");
                return false;
            }

            if (email.trim() === "") {
                alert("Please enter an email address.");
                return false;
            }

            // You can add more sophisticated email validation here

            if (password.trim() === "") {
                alert("Please enter a password.");
                return false;
            }

            // You can add more complex password requirements here

            return true;
        }
    });