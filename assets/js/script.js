// Assignment code here
var lengthEl = document.getElementById("length");
var lowerEl = document.getElementById("lowercase");
var upperEl = document.getElementById("uppercase");
var numberEl = document.getElementById("numbers");
var symbolEl = document.getElementById("symbols");
var generateEl = document.getElementById("generatebtn");
var passwordText = document.querySelector("#password");

//create a function that contains 4 functions. 
var randomGen = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

/* Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  passwordText.value = password;

}*/

// Add event listener to generate button
generatebtn.addEventListener("click", () => {
    var length = +lengthEl.value;
    var hasLower = lowerEl.checked;
    var hasUpper = upperEl.checked;
    var hasNumber = numberEl.checked;
    var hasSymbol = symbolEl.checked;

    passwordText.innerText = generatePwd(hasLower, hasUpper,  hasNumber, hasSymbol, length);

});

//Start generate the password included the 4 random functions, array, loop.
function generatePwd(lower, upper, number, symbol, length) {
  let generatedPwd = '';
  var typesCount = lower + upper + number + symbol;
  var typeArray = [{lower}, {upper}, {number}, {symbol}].filter(item=> Object.values(item)[0]);

  if(typesCount == 0) {
    return "";
  } 

for(let i=0; i<length; i+=typesCount) {
  typeArray.forEach(type => {
    var funName = Object.keys(type) [0];
    generatedPwd += randomGen[funName]();
  });
}

var officalPwd = generatedPwd.slice(0, length);

return officalPwd;
}

//math.random to select the random number with demical. 
//added math.floor to round up the demical number.

function getRandomLower() { //random function for lowercase chacaters
  var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  return lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];
}

function getRandomUpper() { //random function for uppercase chacaters
  var upperAlphabet = "ABCEDFGHIJKLMNOPQRSTUVWXYZ"
  return upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];
} 

function getRandomNumber() { //random function for numeric chacaters
  var numeric = "0123456789"
  return numeric[Math.floor(Math.random() * numeric.length)];
}

function getRandomSymbol() { //random function for symbol chacaters 
  var symbol = "!@#$%^&*()<>?,.+"
  return symbol[Math.floor(Math.random() * symbol.length)];
}
