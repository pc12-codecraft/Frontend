const i = "priya"
const repoCount = 5

console.log(i + repoCount + " Value");

//string interpolation
console.log(`hello my name is ${i} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhhc')  //string declaration
// In browser it shows string in (key : value) pairs
// key : value
//  0 : "h"
//  1 : "i"
//  2 : "t".....
//  7 : "c"
//  Length : 8

console.log(gameName[0]);   //h
console.log(gameName.__proto__);  //{}
console.log(gameName.length);     //9
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));      //t
console.log(gameName.indexOf("t"));      //2

const newString = gameName.substring(0, 4);
console.log(newString);

//-8 --> from back
const anotherString = gameName.slice(-8, 6);
console.log(anotherString);  //itesh

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

//webbrowser does not understand space if some one give name like --> priyachauhan com => priyachauhan%20com
//aumatically change space into --> %20
const url = "https://hitesh.com/hitesh/%20/choudhary"
console.log(url.replace('%20', ''));
console.log(url.includes("hitesh"));
console.log(url.includes("priya"));
console.log(url.split('/'));

//
const file = "profile.jpg";
console.log(file.startsWith("profile")); // true
console.log(file.endsWith(".jpg"));      // true

//replace one replace first occurance
const text = "hello hello hello";
console.log(text.replace("hello", "hi"));  // hi hello hello
console.log(text.replaceAll("hello", "hi")); // hi hi hi

//concatenate
const first = "Priya";
const last = "Chauhan";
console.log(first.concat(" ", last)); // Priya Chauhan

//But in modern JavaScript, + or template literals are generally preferred:
console.log(`${first} ${last}`);

//padStart() and padEnd()
//Useful when you want a string to have a fixed length.JavaScript
console.log("5".padStart(3, "0"));// "005"

console.log("5".padEnd(3, "0"));// "500"

let me = "Priya";
me[0] = "X";
console.log(me);  //Priya
//Why? Because you cannot directly change a character inside a JavaScript string.
//In JavaScript, strings are immutable, which means:Once a string is created, you cannot change any individual character inside it.

let name = "Priya";
yourname = name.toUpperCase();
console.log(yourname);
console.log(name); // PRIYA
//So remember:String methods don't modify the original string; they return a new string.