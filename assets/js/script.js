// Assignment code here

// ask for number of length
var getPasswordLength = function() {
  
  var length = window.prompt("Pick a number of characters between 8-128");

  if (length <=128 && length >= 8) {
      console.log("The number of character is " + length); 
    } else {
    window.alert("Please enter the number between 8-128.");
    return getPasswordLength();
  }
};
getPasswordLength();

// create a variable of characters 
// var chars = "0123456789abcedfghijklmnopqrstuvwxyz!@#$%^&*()ABCEDFGHIJKLMNOPQRSTUVWXYZ"


// create a random password loop with Math.random()
// for (var i = 0; i <= passwordLength; i++)


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
