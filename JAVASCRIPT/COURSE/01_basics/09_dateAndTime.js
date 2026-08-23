//Dates

let myDate = new Date()    //creates a date object containing the current date and time
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON());    //converts the date into a JSON/ISO-format string (z means UTC time)
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //--> object

let myCreateDate = new Date(2023, 1, 23)
console.log(myCreateDate.toDateString());   //return only date not time

//JS months are 0 indexed
let myCreateDate1 = new Date(2023, 1, 23, 13, 3)
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date("2023-02-06")
console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now()   //return current time stamp in miliseconds
console.log(myTimeStamp);      //--> timestamp from 1 jan 1970UTC
console.log(myCreateDate2.getTime()); 

console.log(Date.now()); //--> millisec

console.log(Math.floor(Date.now()/1000)); //--> sec

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);   //0 to 11
console.log(newDate.getDay());       //0 to 6 --> 0 = sunday

console.log(`${newDate.getDay()} and the time ${newDate.toLocaleTimeString()} and the date ${newDate.toLocaleDateString()}`);  //local time -- current time


const weekDay = newDate.toLocaleString('default', {
    weekday : "long",    //long -- sunday, short -- sun, narrow -- s
})

const time = newDate.toLocaleTimeString();

console.log(`${weekDay} and the time ${time}`);

