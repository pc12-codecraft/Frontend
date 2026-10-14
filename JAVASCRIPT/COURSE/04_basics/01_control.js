//if

const userloggedIn = true;
const debitCard = true;

if(userloggedIn && debitCard){
  console.log("allow to buy course");
}

const loggedInFromEmail = true;
const loggedInFromGoogle = false;

if(loggedInFromEmail || loggedInFromGoogle){
  console.log("user logged in");
}

//terniary operator
//condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice < 80 ? console.log("buy") : console.log("not buy");