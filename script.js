const generatePass = () => {
  let len = prompt("How long would you like your password to be (8-128)?");
  if (len < 8 || len > 128 || isNaN(len)) {
    alert("Password length not accurate, please try again.");
    return generatePass();
  }

  let lower = confirm("Does your password have lowercase letters?");
  let upper = confirm("Does your password have uppercase letters?");
  let numbers = confirm("Does your password have numbers?");
  let character = confirm("Does your password have special characters?");

  let temp = "";
  if (lower) temp += "abcdefghijklmnopqrstuvwyxz";
  if (upper) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) temp += "0123456789";
  if (character) temp += "~!@#$%^&*()_+-";

  let passwd = "";
  for (let i = 0; i < len; i++) {
    passwd += temp[Math.floor(Math.random() * temp.length)];
  }

  document.querySelector('textarea').innerHTML = passwd;
  console.log(temp);
};

document.getElementById("generate").addEventListener("click", generatePass);
