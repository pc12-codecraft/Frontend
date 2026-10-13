// Immediately Invoked Function Expressions (IIFE)
// we face problem from global scope many times for removing global scope variable we use IIFE

//()()

//named IIFE
(function chai(){
  console.log(`DB connected`);
})();     //semicolon necessary for end the envoked function

( function aurcode () {
  console.log('DB coneected one');
} )();

( () => {
  console.log('DB coneected two');
} )();

//unnamed IIFE
( (name) => {
  console.log(`DB coneected two ${name}`);
} )('priya');  //pass value
