const score = 400   //primitive number
console.log(score);

const balance = new Number(100)     //number object
console.log(balance) 

//Number & parseInt
console.log(Number("123px"));      //NaN
console.log(parseInt("123px"));    //123
/*
Number() expects the whole string to represent a valid number.
parseInt() reads an integer from the beginning.
*/

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));           //2 digit after decimal
console.log(typeof(balance.toFixed(2)));   //return string , not a number

const otherNumber = 123.897
console.log(otherNumber.toPrecision(4)); //4 means 4 significant digits , not 4 digits after decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//NaN
console.log(Number("Hello"));
console.log(Number.isNaN(Number("Hello")));  //true

//--------------------------MATHS---------------------------
console.log(Math);   //----------object
console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.pow(2,3));
console.log(Math.sqrt(25));
console.log(Math.trunc(4.9));
console.log(Math.sign(-5));
//trunc and floor diff --> 
//trunc simply remove decimal part (-4.1 = -4),(4.9 = 4)
//floor go down (-4.1 = -5),(4.1 = 4)

console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.max(4, 5, 7, 34,45));
console.log(Math.min(-4, 45, 23, 1, 4));

//return random decimal
console.log(Math.random());  //give value between 0 <= x < 1
console.log(Math.random (45));
console.log(Math.floor(Math.random()*10) + 1);  //take floor value
console.log((Math.random()*10) + 1);  //shift value to left (1 to 10)

const min = 10;
const max = 20;
//this generate an integer from(10 - 20)
console.log(Math.floor(Math.random() * (max - min + 1))+ min)