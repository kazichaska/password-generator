// Assigning global variables
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/","\:","\;","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var numericChar = ["1","2","3","4","5","6","7","8","9","0"];
var password = [];

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
    // doing this if a user tries answering incorrectly multiple times. This will prompt themt to put right information
    return gatherPasswordReq();
  }
  // once it is valid choice keeps continuing 
  else {
    upper = confirm("Would you want any uppercase letter?");
    lower = confirm("Would you want any lowercase letter?");
    special = confirm("Would you want any spacial character? like @#$%% etc");
    number = confirm("Would you want any numbers?");
  }
  // console.log(upper,lower,special,number);

  passwordReqCollection = {
    lengthChar: gatherInfo,
    specialOn: special,
    lowerOn: lower,
    upperOn: upper,
    numberOn: number
  };
  
  console.log(passwordReqCollection);
  
  return passwordReqCollection;
}

function generatePassword() {
  // calling this function which has all the array information from previous function and putting this to pass variable. 
  var pass = gatherPasswordReq();
  var result = [];
  var finalPass = '';


  if (!pass.upperOn && !pass.specialOn && !pass.lowerOn && !pass.numberOn) {
    window.alert("Has to be a valid option!");
    return '';
  }
  else if (pass.upperOn && pass.lowerOn && pass.specialOn && pass.numberOn) {
      result.push(...upperCase, ...lowerCase, ...specialChar, ...numericChar);
      console.log(result);
    }
  else if (pass.upperOn && pass.lowerOn && pass.specialOn) {
      result.push(...upperCase, ...lowerCase, ...specialChar);
      console.log(result);
    }
  else if (pass.upperOn && pass.lowerOn && pass.numberOn) {
    result.push(...upperCase, ...lowerCase, ...numericChar);
    console.log(result);
  }
  else if (pass.lowerOn && pass.numberOn && pass.specialOn) {
      result.push(...lowerCase, ...numericChar, ...specialChar);
      console.log(result);
    }
  else if (pass.lowerOn && pass.upperOn && pass.specialOn) {
    result.push(...lowerCase, ...upperCase, ...specialChar);
    console.log(result);
  }
  else if (pass.upperOn && pass.lowerOn) {
    result.push(...upperCase, ...lowerCase);
    console.log(result);
  }
  else if (pass.upperOn && pass.specialOn) {
    result.push(...upperCase, ...specialChar);
    console.log(result);
  }
  else if (pass.upperOn && pass.numberOn) {
    result.push(...upperCase, ...numericChar);
    console.log(result);
  }
  else if (pass.lowerOn && pass.specialOn) {
    result.push(...lowerCase, ...specialChar);
    console.log(result);
  }
  else if (pass.lowerOn && pass.numberOn) {
    result.push(...lowerCase, ...numericChar);
    console.log(result);
  }
  else if (pass.specialOn && pass.numberOn) {
    result.push(...specialChar, ...numericChar);
    console.log(result);
  }
  else if (pass.upperOn) {
    result.push(...upperCase);
    console.log(result);
  }
  else if (pass.lowerOn) {
    result.push(...lowerCase);
    console.log(result);
  }
  else if (pass.specialOn) {
    result.push(...specialChar);
    console.log(result);
  }
  else if (pass.numberOn) {
    result.push(...numericChar);
    console.log(result);
  }
  else
  window.alert("Wrong value");

  for (i = 0; i < pass.lengthChar; i++) {
    finalPass += result[Math.floor(Math.random() * result.length)];
    // each time final pass run it would get one character from `result` and adds to the `finalPass`
    console.log(finalPass);
  }

  // returning finalPass back to function
  return finalPass;
}

// generatePassword();

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
