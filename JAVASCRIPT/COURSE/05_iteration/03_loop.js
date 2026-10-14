//for of
//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for(const num of arr){
  //console.log(num);
}

const str = "Hello World!";
for(const s of str){
  //console.log(`Each char is ${s}`);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India");
//console.log(map);

// for(const key of map){
//   console.log(key)
// }
// for(const [key, value] of map){
//   console.log(key, ':-', value);
// }
// for(const [key, value] of map){
//   console.log(key);
// }
// for(const [key, value] of map){
//   console.log(value);
// }


//-----------------------------object
const myObject = {
  'game1' : 'NFS',
  'game2' : 'spiderman'
}

//wrong not iterable
// for(const [key, value] of myObject){
//   console.log(key, ':-', value);
// }

const myObj = {
  js : 'javascript',
  cpp : 'c++',
  rb : 'euby',
  swift : 'swift by apple',
}
// for(const key in myObj){
//   console.log(key);
// }

// for(const key in myObj){
//   console.log(myObj[key]);
// }

// for(const key in myObj){
//   console.log(`${key} shortcut is for ${myObj[key]}`);
// }

const programming = ['js', 'rb', 'py', 'java', 'cpp']
// for(const key in programming){
//   console.log(key);
// }
/*
0
1
2
3
4
*/
// for(const key in programming){
//   console.log(programming[key]);
// }

const mapp = new Map()
map.set('HR', "IHaryana")
map.set('UP', "Uttar Pradekh")
map.set('UK', "Uttarakhand")
map.set('MP', "Madhya Pradesh");

// for(const key in mapp){
//   console.log(key)   //not iterable print nothing
// }

const coding = ['js', 'rb', 'py', 'java', 'cpp']
//coding.forEach( function greet(item){
// coding.forEach( function(item){    //callback function so no name
//   console.log(item)
// })

//through arrow function
// coding.forEach((item) => {
//   console.log(item);
// })

//printMe function
// function printMe(item){
//   console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=> {
//   console.log(item, index, arr);
// })


const myCoding = [
  {
    languageName : 'JavaScript',
    languageFile : 'js',
  },

  {
    languageName : 'Java',
    languageFile : 'java',
  },

  {
    languageName : 'Python',
    languageFile : 'py',
  },
]

myCoding.forEach((item) => {
  console.log(item.languageName);
})