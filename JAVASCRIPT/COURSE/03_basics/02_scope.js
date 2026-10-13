//scope --{}

let a = 10
const b = 20
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

let x = 5;    //global scope
//block scope
if(true){
    let x = 10
    const y = 20 
    var z = 30      //var is function scoped
}

//console.log(x);     //scope variable
//console.log(y);     //scope variable
//console.log(z);     //30

//SHADOWING - inner scope declares a variable with the same name as outer scope.
// let x = 5;

// if (true) {
//     let x = 10;
//     console.log(x); // 10
// }

// console.log(x); // 5
//
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        //console.log(username + website);  //hiteshyoutube
    }
    //console.log(website);   //erroe block scope
}
//console.log(username);  //error block scope



//------------------interesting ------------
//console.log(addone(5))   //6
function addone(num){
    return num+1
}
//console.log(addone(5))    //6


//----different not possible-------------hoisting 
//console.log(addtwo(5))   //wrong way because of declaration
const addtwo = function(num){    //expression
    return num+2
}
console.log(addtwo(5))  //7