// Assignment code here


// Get references to the #generate element
//
var generateBtn = document.querySelector("#generate");
var length = 15;
var numbers = [0,1,2,3,4,5,6,7,8,9];
var characters = ["A" ,"b", "C", "d", "E", "f", "%", "$","@", "*","#"]
var chosenCharacters = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = ""
   for (var i = 0; i < length; i++){
      var genpass = Math.floor(Math.random() * chosenCharacters.length);
      password += chosenCharacters[genpass];
    }

 return password
 }


function criteriaPrompt() {
  
  var count = prompt("Please enter a password legnth between 8 and 128");
  
  var supersecret = prompt("do you want special characters?");
  var wantNumbers = prompt("do you want numbers?")

  if(supersecret === "yes") {
    chosenCharacters = [...chosenCharacters, ...characters];
  

  if(wantNumbers === "yes") {
    chosenCharacters = [...chosenCharacters, ...numbers]
  }

  }
  console.log(chosenCharacters);

    
  writePassword()

  }
  




// i changed this to make it give criteria when generate button is clicked so that it can give the criteria 
//when the button is clicked it causes the criteria prompt to show up and all thing are carried on from there
generateBtn.addEventListener("click", criteriaPrompt);