// console.log("p");
// console.log("r");
// console.log("i");
// console.log("y");
// console.log("a");

function sayMyName() {
    console.log("p");
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");
}
//sayMyName()

function addTwoNumber(number1, number2){  //parameter
    console.log(number1 + number2);
}

//addTwoNumber(3, 4);  //arguments

function addNumber(number1, number2){
    console.log(number1 + number2);  //does not return only print
}
//const result = addNumber(3, 5);
//console.log("Result :", result);  //--> undefined

function addnums(number1, number2){
    let total = number1 + number2;   //--> total access inside scope
    return total;
    //return number1 + number2;
}
//const result = addnums(3, 5);
//console.log(result);

//function loginUserMessage(username){
function loginUserMessage(username =  "sam"){ //-->default - sam

    if(username === undefined){
        console.log("please enter a username")
        return;
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Priya"))
//console.log(loginUserMessage(""))
//console.log(loginUserMessage())

function calculateCartPrice(num1){
    return num1;
}
//console.log(calculateCartPrice(200, 300, 400)); //200

function calCartPrice(...num1){ //rest operator
    return num1;
}
//console.log(calCartPrice(200, 300, 400));  //[200, 300, 400 ]

function calCartRate(val1, val2,...num1){
    return num1;
}
//console.log(calCartRate(200, 300, 401, 405, 400)); //[401, 405, 400]

//object
// const anyobject = {
//     username : "priya",
//     price : 100
// }

// const user = {
//     username : "hitesh",
//     price : 199
// }

// function handleObject(user){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// }
//handleObject(anyobject)
//Username is priya and price is 100


//direct object --> handleObject(user)


function handlesObject(user){
    console.log(`Username is ${user.username} and price is ${user.price}`)
}

// handlesObject({
//     username : "sam",
//     price : 399
// })

//Username is sam and price is 399



const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//0 index
//console.log(returnSecondValue(myNewArray)); //400
//console.log(returnSecondValue([200,400,100,600])); //400