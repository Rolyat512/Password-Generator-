const generatePass = () => {
  let len = prompt("How long would you like your password to be (8-128)?");
  if (len < 8 || len > 128 || isNaN(len)) {
    alert("Password length not accurate, please try again.");
    return generatePass();
  }
// the first few lines of code is what pops up when the user clicks on the generate password button
 
    
  let lower = confirm("Does your password have lowercase letters?");
  let upper = confirm("Does your password have uppercase letters?");
  let numbers = confirm("Does your password have numbers?");
  let character = confirm("Does your password have special characters?");

//   This section asks the user which type of characters they want their password to consists of.

  let temp = "";
  if (lower) temp += "abcdefghijklmnopqrstuvwyxz";
  if (upper) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) temp += "0123456789";
  if (character) temp += "~!@#$%^&*()_+-";

//   These if statements includes all of the possible strings of characters they can use. 

  let passwd = "";
  for (let i = 0; i < len; i++) {
    passwd += temp[Math.floor(Math.random() * temp.length)];
  }

//   And finally the for loop is what generates the password length. 

  document.querySelector('textarea').innerHTML = passwd;
  console.log(temp);
};

document.getElementById("generate").addEventListener("click", generatePass);

//  And finally the event listener is needed so that when you actually click the generate pass button, you're then promopted with all of the questions. 
