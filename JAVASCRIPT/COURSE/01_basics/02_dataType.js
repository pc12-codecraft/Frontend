"use strict"; //treat all JS code as newer version(follow strict rules)

// alert(3+3); //we are using nodejs , not browser(usually a browser func that shows a popup)

let name = "Priya";
let age = 18;
let isLoggedIn = false;
let state = null;  //Even though null is a primitive , type of null returns "object"
let priya;   //created variable but didn't give it a value

//-----typeof
console.log(typeof name);       // "string"
console.log(typeof age);        // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof state);      // "object"
console.log(typeof undefined);  // "undefined"
console.log(typeof priya);      // "undefined"

//----Primitive
//number --> -(2^53 -1) to (2^53 -1)
//bigint
//string -->""
//boolean --> true/false
//null --> standalone value (representation on empty value) intentionally say there is no value
//undefined --> value not assigned
//symbol --> uniqueness find 

//----Non-primitive
//object
//array
//function

let student = {
    name: "Priya",
    age: 20
};

let marks = [80, 90, 95];

function hello() {
    console.log("Hello");
}



