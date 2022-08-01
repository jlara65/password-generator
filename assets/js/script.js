// Assignment code here / elements using both document.getElementByID and document.querySelector
var lengthEl = document.getElementById("length");
var lowerEl = document.getElementById("lowercase");
var upperEl = document.getElementById("uppercase");
var numberEl = document.getElementById("numbers");
var symbolEl = document.getElementById("symbols");
var generateEl = document.querySelector("#btn");
var passwordText = document.querySelector("#password");

// Turn 4 random functions into object
var randomGen = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

/*function counterChecker() {
  if(lengthEl > 8 || lengthEl < 128) {
    alert("Please input the number of length between 8 to 128 characters!");

    return false;
  } else {
    return true;
    }
    console.log(counterChecker);
}*/

// Add event listener to generate button
generatebtn.addEventListener("click", () => {
  
    var length = +lengthEl.value; //create a variable for element lengthEl using unary plus operator to change from string to number
    var hasLower = lowerEl.checked; // create a variable for element lowerEL and checked property either true or false
    var hasUpper = upperEl.checked; // create a variable for element upperEL and checked property either true or false
    var hasNumber = numberEl.checked; // create a variable for element numberEL and checked property either true or false
    var hasSymbol = symbolEl.checked; // create a variable for element symbolEL and checked property either true or false

    if (length >= 8 && length <= 128) { // verify if length input is in range
    } else {
      alert("Please input the number of length between 8 to 128 characters!");
      return generateEl;
    }

    //pass the elements value true/false to passwordText.innerText
    passwordText.innerText = password(hasLower, hasUpper,  hasNumber, hasSymbol, length); 

});

//Start generate the password included the 4 random functions, array, loop.
function password(lower, upper, number, symbol, length) {

  let generatedPwd = ''; // initialize variable and set string to empty 

  var typesCount = lower + upper + number + symbol; // variable for the number of checked items
  var typeArray = [ //create a array variable of checked item. bracket
    {lower}, 
    {upper}, 
    {number}, 
    {symbol}].filter(item=> Object.values(item)[0]); //filter out the unchecked item (false)

    // If all options are unchecked and stop the generate and return to nothing.
  if(typesCount == 0) { 
    return "";
  } 

  //loop over the length of character for each type
for(let i=0; i<length; i+=typesCount) {
  typeArray.forEach(type => {
    var funName = Object.keys(type) [0];
    generatedPwd += randomGen[funName]();
  });
}

// add the end of password generate to final officalPwd then return. GeneratedPwd will come with an extra character and slice to match correct length.
var officalPwd = generatedPwd.slice(0, length); 

return officalPwd;
}

//math.random to select the random numbers with decimal. 
//added math.floor to round up the decimal numbers.

function getRandomLower() { //random function for lowercase characters
  var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  return lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];
}
function getRandomUpper() { //random function for uppercase characters
  var upperAlphabet = "ABCEDFGHIJKLMNOPQRSTUVWXYZ"
  return upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];
} 
function getRandomNumber() { //random function for numeric characters
  var numeric = "0123456789"
  return numeric[Math.floor(Math.random() * numeric.length)];
}
function getRandomSymbol() { //random function for symbol characters 
  var symbol = "!@#$%^&*()<>?,.+"
  return symbol[Math.floor(Math.random() * symbol.length)];
}
