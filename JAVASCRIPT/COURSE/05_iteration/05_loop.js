const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newNums = myNumbers.map( (num) => {return num + 10})
const newNums = myNumbers
  .map( (num) => {return num * 10})
  .map( (num) => {return num + 1})
  .filter( (num) => num >= 40)
//console.log(newNums)

//------------------------------reduce method
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue
);
// console.log(sumWithInitial);

const myNum = [1,2, 3]

const myTotal = myNum.reduce(function (acc, currval){
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval
}, 0)
//console.log(myTotal);

const mySum = myNum.reduce( (acc, curr) => acc+curr, 0)
//console.log(mySum);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "java course",
    price: 1999
  },
  {
    itemName: "python course",
    price: 1499
  },
  {
    itemName: "web development course",
    price: 3499
  },
  {
    itemName: "react course",
    price: 2499
  },
  {
    itemName: "node.js course",
    price: 2999
  },
  {
    itemName: "DSA course",
    price: 3999
  },
  {
    itemName: "database course",
    price: 1799
  },
  {
    itemName: "full stack course",
    price: 4999
  },
  {
    itemName: "machine learning course",
    price: 4499
  },
  {
    itemName: "AI course",
    price: 3599
  },
  {
    itemName: "cyber security course",
    price: 2799
  },
  {
    itemName: "HTML and CSS course",
    price: 999
  },
  {
    itemName: "Git and GitHub course",
    price: 799
  },
  {
    itemName: "SQL course",
    price: 1299
  }
];
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay)
