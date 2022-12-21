// Assignment Code
let cb3 = document.getElementById('cb3');
let includeLowercase = cb3.checked;
let cb1 =document.getElementById('cb1')
let includeNumbers = cb1.checked;
let cb2 = document.getElementById('cb2')
let includeUppercase = cb2.checked;
let cb4 = document.getElementById('cb4')
let includeSpecial = cb4.checked;
let passwordLength = document.getElementById('numberSelect')
document.getElementById('numberSelect').addEventListener('change', function() {
  passwordLength = this.value;
});


// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength, cb2.checked, cb3.checked, cb4.checked, cb1.checked);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button




function generatePassword(length, includeUppercase, includeLowercase, includeSpecial, includeNumbers) {

  // Start with an empty password
  let password = "";
  
  // Define a string of all the possible characters
  let allChars = "";
  if (includeUppercase) allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) allChars += "abcdefghijklmnopqrstuvwxyz";
  if (includeSpecial) allChars += "!@#$%^&*()_+-=[]{}|;':,.<>?";
  if (includeNumbers) allChars += "0123456789";
  
  // Generate a password by randomly selecting characters from the string of all possible characters
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  
  return password;
}