const coding = ['js', 'rb', 'py', 'java', 'cpp']
const values = coding.forEach((item) => {
  //console.log(item);
})
//console.log(values);
/* forEach return nothing (undefined)
js
rb
py
java
cpp
undefined
*/

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = num.filter((num) => num > 4)
//console.log(newNum)

const newno = num.filter((num) => {
  //num > 4  //[] block scope we have to return 
  return num>4
})
//console.log(newno);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnumber = []
number.forEach( (nums) =>{
  if(nums > 4){
    newnumber.push(nums)
  }
})
//console.log(newnumber);


const books = [
  {
    title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
  },
  {
    title: 'The Great Gatsby', genre: 'Classic', publish: 1925, edition: 2001
  },
  {
    title: 'To Kill a Mockingbird', genre: 'Fiction', publish: 1960, edition: 2006
  },
  {
    title: 'Harry Potter', genre: 'Fantasy', publish: 1997, edition: 2003
  },
  {
    title: 'The Hobbit', genre: 'Fantasy', publish: 1937, edition: 1999
  },
  {
    title: 'Pride and Prejudice', genre: 'Romance', publish: 1813, edition: 2005
  },
  {
    title: 'The Alchemist', genre: 'Adventure', publish: 1988, edition: 2004
  },
  {
    title: '1984', genre: 'Dystopian', publish: 1949, edition: 2000
  },
  {
    title: 'The Book Thief', genre: 'Historical Fiction', publish: 2005, edition: 2010
  },
  {
    title: 'The Fault in Our Stars', genre: 'Romance', publish: 2012, edition: 2014
  },
  {
    title: 'Wings of Fire', genre: 'Autobiography', publish: 1999, edition: 2005
  },
  {
    title: 'The Jungle Book', genre: 'Adventure', publish: 1894, edition: 2002
  },
  {
    title: 'The Da Vinci Code', genre: 'Mystery', publish: 2003, edition: 2006
  },
  {
    title: 'The Silent Patient', genre: 'Thriller', publish: 2019, edition: 2020
  },
  {
    title: 'Atomic Habits', genre: 'Self-help', publish: 2018, edition: 2022
  }
];

//const userBooks = books.filter( (bk) => bk.genre === 'Romance')
//const userBooks = books.filter( (bk) => {return bk.publish >= 2000})
const userBooks = books.filter( (bk) => {return bk.publish >= 2000 && bk.genre === 'Romance'})
console.log(userBooks);
