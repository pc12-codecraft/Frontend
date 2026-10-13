const user = {
  username : "hitesh",
  price : 999,

  welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`);
    //console.log(this);    //context ko print krta hai
  }
}

//user.welcomeMessage();         //hitesh, welcome to website
/*
this context ko print krta hai 
hitesh, welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

// user.username = "sam"              
// user.welcomeMessage();            //sam, welcome to website
/*
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

//console.log(this);              //{}
/*
empty this time so print 
abhi hm node environment me hai toh this refer this time ek empty object ko

but in browser this refer to window 
*/

function chai(){
  let username = "hitesh";
  console.log(this);    
  //bhut sari value aayi hai jb kisi fun ke andr krte hai toh kafi value milti hai


  console.log(this.username);    //undefined
  //function ke andr use nhi kr paa rhe hai object ke andr hi kaam kr rha hai
}
//chai();

const code = function(){
  let username = "hitesh"
  console.log(this.username);    //undefined
}
//code();

const hitesh = () => {
  let username = "chaodhary"
  console.log(this);     //{}
}
//hitesh();

//explicit return
const addTwo = (num1, num2) => {
  return num1 + num2;
}
//console.log(addTwo(3, 4));

//implicit return 
//const addTwo = (num1, num2) =>  num1 + num2;
//const addTwo = (num1, num2) =>  (num1 + num2);

const addone = (num1, num2) => {username : "hitesh"}
//console.log(addone(3, 4));    //undefined
// //undefined we have to close into parenthesis

const addOn = (num1, num2) => ({username : "hitesh"})
//console.log(addOn(3,5))       //username : "hitesh"


