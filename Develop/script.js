// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var pwLength = prompt('Enter password length between 8 and 128 characters.');

if (pwLength < 8 || 128 < pwLength){
 alert('Please enter length between 8 and 128.');
 return '';
}

var includedCharacters = [];

const hasUppercase = confirm('Include uppercase characters?');
const hasLowercase = confirm('Include lowercase?');
const hasNumbers = confirm('Include numbers?');
const hasSymbols = confirm('Include special characters?');

const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_','-','+','='];

if(hasUppercase){
  var includedCharacters = includedCharacters.concat(uppercase);
}
if(hasLowercase){
  var includedCharacters = includedCharacters.concat(lowercase);
}
if(hasNumbers){
  var includedCharacters = includedCharacters.concat(numbers);
  }
if(hasSymbols){
  var includedCharacters = includedCharacters.concat(symbols);
}
else{
  alert('Please select characters to include in your password.');
  return '';
}

var password = '';
for (var i = 0; i < pwLength; i++) {
  const randomIndex = Math.floor(Math.random() * includedCharacters.length);
  password += includedCharacters[randomIndex];
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}