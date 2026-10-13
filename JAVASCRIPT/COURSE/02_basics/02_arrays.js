const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])

const allheroes = marvel_heroes.concat(dc_heroes);
//console.log(allheroes);
/*
[
  'thor',
  'Ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
*/

//spread
const all_newheroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_newheroes);

const nest_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_array = nest_arr.flat(Infinity)
//console.log(real_array);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] 
*/

// console.log(Array.isArray("Priya"));
// console.log(Array.from("Hitesh"));

//console.log(Array.from({name : "Hitesh"})); //[]
//first tell make array from keys or value

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));