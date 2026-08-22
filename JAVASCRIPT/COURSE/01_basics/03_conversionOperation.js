let score = "33abc"

console.log(typeof score);    //string
console.log(typeof (score));   //string

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));    //number
console.log(valueInNumber);             //NaN 

//EXPLICIT CONVERSION
let scores = "33"

console.log(typeof scores);           //string
console.log(typeof (scores));         //string

let valueInNumbers = Number(scores);
console.log(typeof (valueInNumbers));  //number
console.log(valueInNumbers);           //33

let num = null

console.log(typeof num);        //object
console.log(typeof (num));      //object

let valueInNum = Number(num);
console.log(typeof (valueInNum));     //number
console.log(valueInNum);              //0


let no = undefined

console.log(typeof no);        //undefined
console.log(typeof (no));      //undefined

let valueInNo = Number(no);
console.log(typeof (valueInNo));     //number
console.log(valueInNo);              //NaN

let nums = NaN           //NaN is a special value of the number type

console.log(typeof nums);        //number
console.log(typeof (nums));      //number

let valueInNums = Number(nums);
console.log(typeof (valueInNums));     //number
console.log(valueInNums);              //NaN

//"33" --> 33  --> number
//"33abc" --> NaN  -->number
//If the whole string represents a valid number → Number() converts it. Otherwise → NaN.
//true --> 1, false --> 0  --> number

//null        → 0     → number
//undefined   → NaN   → number
//""          → 0     → number
//" "         → 0     → number
//"33.5"      → 33.5  → number


//falsy value  , almost everything else is truthy
//false
//0
//-0
//0n
//""
//null
//undefined
//NaN

// ------------------------------Operation----------------------

let value = 3;
let negValue = -value
console.log(negValue);            //-3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/3);         //0.6666666666666666
console.log(2%2);
console.log(2**2);
console.log(3/2);


//+ with strings → concatenation

//"2" + 2  → "22"
//2 + "3"  → "23"
//"2" + "3" → "23"

let str1 = "hello"
let str2 = "priya"

let str3 = str1 + str2
console.log(str3);          //hellopriya

console.log("2"+2);
console.log(2+"3");
console.log("Age: "+18);

//IMPLICIT CONVERSION
//But -, *, / behave differently
console.log("2"-1);
console.log(5-"3");
console.log(5*"3");
console.log("2"*3);
console.log("10"/2);
console.log(10/"2");

