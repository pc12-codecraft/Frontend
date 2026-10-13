//singleton --> if made from constructor
//object.create

//symbol, constructor, singleton

// object literals

const mySym = Symbol("key1")  //--> declare symbol
//object --> key : value
const JsUser = {
    name : "Priya",
    "full name" : "Priya Chauhan",
    [mySym] : "mykey1",
//    mySym : "mykey1",  //--> ye shi nhi hai  datatype symbol nhi hai
    age : 18,
    location : "Jaipur",
    email : "priyachauhan.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "saturday"],
}
//console.log(JsUser.email);
//console.log(JsUser["email"]);

// console.log(JsUser,full name);  //--> not possible
//console.log(JsUser["full name"]);

//mySym
//console.log(JsUser.mySym);
//console.log(typeof(JsUser.mySym));   //--> String

//[mySym]
//console.log(JsUser[mySym]);
//console.log(typeof(JsUser[mySym]));


//---> change value

JsUser.email = "priyachatgpt.com";
//Object.freeze(JsUser)  //lock valueof JsUser
JsUser.email = "hitesh@microsoft.com";

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

//console.log(JsUser.greeting);   //-->[Function (anonymous)]

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());