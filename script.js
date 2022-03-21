let generateBtn = document.querySelector("#generate");
console.log(generateBtn)

//Arrays

const lc ="abcdefghijklmnopqrstuvwxyz";

const uc ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const spec ="#$%&()*+<=>?@";

const num = "0123456789";

let allChar = "";

// questions
function generatePassword() {
  console.log("button was clicked")
  let pwdLength = prompt(
    "How long would you want your pass to be?(8 - 128 characters)"
  );
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Only number's between 8 and 128.");
  } else {
    let lowerCase = confirm("Any lower case letters?");
    if(lowerCase){
      allChar += lc
    };
    let upperCase = confirm("Any upper case letters?");
    if (upperCase){
      allChar += uc
    };
    let specialCharacters = confirm("Any special characters?");
    if (spec){
      allChar += spec
    };
    let numbers = confirm("Any numbers?");
    if (num){
      allChar += num
    };
    //prompt to work
    if (
      lowerCase === false &&
      upperCase === false &&
      specialCharacters === false &&
      numbers === false
    ) {
      alert("Select one character type.");
      generatePassword();
    }
  }
  let pwd = "";
  for (let i=0; i<pwdLength; i++){
    pwd += allChar.charAt(Math.floor(Math.random() * allChar.length))
  }
  return pwd
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)

// Write password to the #password input
function copy() {
  document.getElementById("password").select();
  document.password("copy");
  alert("The password has been copied to your clipboard!");
}

