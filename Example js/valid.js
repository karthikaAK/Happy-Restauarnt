function validate(){


document.getElementById("login-form").addEventListener("submit", function(event) {
 event.preventDefault();

 const validEmail = document.getElementById("email").value;
 const validPassword = document.getElementById("pass").value;

 console.log(validEmail)
 console.log(validPassword)
if (validEmail || validPassword) {
 // If login is successful, redirect to the home page
    window.location.href = "newpage.html";
} else {
 alert("Invalid username or password. Please try again.");
 }
});
}