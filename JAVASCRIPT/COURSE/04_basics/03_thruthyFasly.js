//truthy values
/*
[], true, 1(other than 0), "0", "false", " ", {}, function(){}
*/


//falsy values
/*
false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/


const userEmail = "priya@chauhan.ai";

if(userEmail){
  console.log("got user email");
}
else{
  console.log("Don't have user email");
}


const userMail = [];       //0 --> falsy
if(userMail.length){
  console.log("array");
}
else{
  console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
  console.log("Object is empty");
}


/*
false == 0  --> true

false == ""  --> true

0 == ""  --> true
*/

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = undefined ?? 10
console.log(val3);
//first val assign ho jati hai