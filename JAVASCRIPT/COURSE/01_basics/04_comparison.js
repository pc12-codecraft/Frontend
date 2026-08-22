/* 
Operator    Meaning
>           greater than
<           less than
>=          greater than or equal
<=          less than or equal
==          equal, with type conversion
!=          not equal, with type conversion
===         strictly equal
!==         strictly not equal
*/
console.log(2 > 1);    //true
console.log(2 >= 1);   //true
console.log(2 < 1);       //false
console.log(2 == 1);       //false
console.log(2 != 1);     //true


//For relational comparison (>, <, >=, <=), JavaScript converts the numeric string "2" to a number:
/*
"2" > 1
↓
2 > 1
↓
true
*/
console.log("2" > 1);      //true
console.log("02" > 1);      //true

//For relational comparisons, null is converted to 0:
/*
null <= 0
↓
0 <= 0
↓
true
*/
console.log(null > 0);       //false
console.log(null < 0);         //false
console.log(null <= 0);        //true

//== has its own special rule
console.log(null == 0);         //false
console.log(null == false);         //false
console.log(null == "");         //false
console.log(null == undefined);         //true

//When undefined is used in relational comparisons, it becomes NaN:
console.log(undefined == 0);       //false
console.log(undefined > 0);         //false
console.log(undefined < 0);       //false
console.log(undefined <= 0);       //false

// === strict check(check data type also)
console.log("2"  === 2);    //false

/*
Boolean conversion in ==:

true  → 1
false → 0

true == 1   → true
false == 0  → true

true === 1  → false
false === 0 → false
*/


/*
COMPARISON
--------------------------------

>   greater than
<   less than
>=  greater than or equal
<=  less than or equal

==  loose equality → allows type conversion
=== strict equality → checks value + type

!=  loose not equal
!== strict not equal


IMPORTANT:
"2" == 2   → true
"2" === 2  → false


NULL:
null == undefined → true
null == 0         → false

For relational comparison:
null → 0

null > 0   → false
null < 0   → false
null >= 0  → true
null <= 0  → true


UNDEFINED:
For relational comparison:
undefined → NaN

undefined > 0   → false
undefined < 0   → false
undefined >= 0  → false
undefined <= 0  → false


BOOLEAN:
true  → 1
false → 0

true == 1   → true
false == 0  → true

true === 1  → false
false === 0 → false


TRUTHY / FALSY:
Falsy:
false, 0, -0, 0n, "", null,
undefined, NaN

Everything else → generally truthy

For normal JavaScript programming, prefer === and !== over == and != unless you specifically want JavaScript's type coercion behavior.
*/