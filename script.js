// Assignment code here
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numericChar = ["1","2","3","4","5","6","7","8","9","0"];
var password = "";

// console.log(upperCase.length);
// console.log(lowerCase.length);

function gatherPasswordReq() {
  // Ask user input
  gatherInfo = parseInt(prompt("Please enter a number between 8 and 128 which would be the length of your password"));
  // testing to make sure it works
  
  console.log(gatherInfo);

  if (!gatherInfo) {
    alert("This must be a value!");
  }
  // make sure the number is between 8 and 128 characters
  else if (gatherInfo < 8 || gatherInfo > 128) {
    gatherInfo = parseInt(prompt("Please enter a number between 8 and 128"));
  }
  // once it is valid choice keeps continuing 
  else {
    upper = confirm("Would you want any uppercase letter?");
    lower = confirm("Would you want any lowercase letter?");
    special = confirm("Would you want any spacial character? like @#$%% etc");
    number = confirm("Would you want any numbers?");
  }
  console.log(upper,lower,special,number);

  var passwordReqCollection = {
    lengthChar: gatherInfo,
    specialOn: special,
    lowerOn: lower,
    upperOn: upper,
    numberOn: number
  };
  
  console.log(passwordReqCollection);
  
  return passwordReqCollection;
}

// call function for test
gatherPasswordReq();

console.log(passwordReqCollection);
console.log(passwordReqCollection.lengthChar);

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
