//constant declare through const
const accountId = 144553     //can't change  value

//variable declare through let and var
let accountEmail = "priyachauhan51574gmail.com"  //change value
var accountPassword = "12345"
accountCity = "Mathura"   //it works but not a good way
let accountState;   //declare but not assigned any value , it show undefined 

//accountId = 2  //not allowed const var can not reassign
console.log(accountId);

accountEmail = "anshchauhan@1234.com"
accountPassword = "9V4FAF"
accountCity = "Kanpur"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/