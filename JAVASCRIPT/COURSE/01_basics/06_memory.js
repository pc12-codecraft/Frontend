/* 1. Stack Memory --
~ Primitive
~ in stack memory we get a copy of variable.

2.Heap Memory
~ Non-primitive
~ in heap memory we get a reference of original value  */

let myYoutubeName = "hiteshdotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"
console.log(myYoutubeName)
console.log(anotherName)

//Because strings are primitive values.
let a = "hello";
let b = a;

b = "bye";
console.log(a); // hello
console.log(b); // bye


//Non-primitive
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

//Here userTwo does not get an independent copy of the object.
//Both variables refer to the same obje

userTwo.email = "priya@google.com"
console.log(userOne.email);
console.log(userTwo.email);