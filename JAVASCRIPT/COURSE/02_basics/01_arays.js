const arr = [0, 1, 2, 3, 4, 5]
const arr1 = [0, 1, 2, 3, 4, 5, true, "Priya"]
const myHeroes = ["shaktiman", "sonpari", "spiderman"]

//console.log(arr1);

const arr2 = new Array(1,  2, 3 , 4)

//console.log(arr[0])

//Array Methods
//JS array is resizable & can contain a mix of different data type.
//array copy operation create shallow copies --> share same reference

arr.push(6) //--> insert in last
arr.pop();  //--> remove last index num
arr.unshift(0) //--> insert in start
arr.shift()  //-> remove first index num 
//console.log(arr);

//comparison
//console.log(arr.includes(9));  //--> return boolean value
//console.log(arr.indexOf(9));  //--> return index of number else (-1)


//add all the element into a string
const newArr = arr.join();
console.log(arr);
console.log(typeof newArr);

//slice, splice differencee
//slice range not include, original array does not affect
//splice range include, original array affect , splice element remove from original array
console.log("A ", arr);
 
const myn1 = arr.slice(1, 3);
console.log(myn1);  //[1,2]

console.log(arr);

console.log("B ", arr);

const myn2 = arr.splice(1, 3);
console.log(myn2); //[1,2,3]

console.log(arr); //[0, 4, 5]