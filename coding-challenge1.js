// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// let num = 0
// function sumSalaries(Salaries) {
//     for(let salary of Object.values(Salaries)){
//         return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
//     }
// };
// console.log(sumSalaries(salaries));
let users = {
  Names: 'John',
  age: 30,
  comp: 'black'
};
let {Names, ...rest} = users;
console.log(rest.age);
function count(user) {
  return Object.keys(user).length
};
//console.log(count(users));
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};
function showMenu({
  size: {
      width:w,
      height:h
  },
  items:[ing1, ing2],
  extra
}){
  console.log(w, h, ing1, ing2, extra);
};
showMenu(options)
// let {
//     size: {
//         width,
//         height
//     },
//     items: [item1, item2],
//     extra
// } = options;
let {size:s, items:i} = options;
//console.log(s, i);
//console.log(width, height, item1, item2);
let user = {
  name: "John",
  years: 30
};
let {name, years:age, isAdmin = 'false'} = user;
console.log(name, age, isAdmin);
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// function topSalary(wage){
//     let maxName = null;
//     let maxSalary = 0
//     for (let [name, salary] of Object.entries(wage)){
//         if (salary > maxSalary){
//             maxSalary = salary;
//             maxName = name
//         }
//     }
//     return maxName
// };
function topSalary(salaries) {
  return Object.values(salaries).reduce((acc, item)=>{return acc > item ? acc: item })
}
console.log(topSalary(salaries));




const game = { 
    team1: 'Bayern Munich', 
    team2: 'Borrussia Dortmund', 
    players: [ 
      [ 
        'Neuer', 
        'Pavard', 
        'Martinez', 
        'Alaba', 
        'Davies', 
        'Kimmich', 
        'Goretzka', 
        'Coman', 
        'Muller', 
        'Gnarby', 
        'Lewandowski', 
      ], 
      [ 
        'Burki', 
        'Schulz', 
        'Hummels', 
        'Akanji', 
        'Hakimi', 
        'Weigl', 
        'Witsel', 
        'Hazard', 
        'Brandt', 
        'Sancho', 
        'Gotze', 
      ], 
    ], 
    score: '4:0', 
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',  
    'Hummels'], 
    date: 'Nov 9th, 2037', 
    odds: { 
      team1: 1.33, 
      x: 3.25, 
      team2: 6.5, 
    }, 
};

//create on player array for each team(variables 'player 1' and 'player2')
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {team1, draw, team2} = game.odds;
function printGoals(...playerName){
  console.log(playerName);
  console.log(`${playerName.length} goals was scored`);
} 
//printGoals('muhammad', 'Aisha', 'Abdullah');
//console.log(team1, team2, draw);

for(let [i, goalScored] of Object.entries(game.scored)){
  //console.log(`Goal ${+i + 1}: ${goalScored}`)
}
let average = 0;
for (const odd of Object.values(game.odds))
average += odd;
average /= Object.values(game.odds).length;
//console.log(average);
for (const [index, value] of Object.entries(game.odds)){
  //console.log(Object.entries(game.odds));
//console.log(index, value);
const teamStr = index === 'x' ? 'Draw' : `Victory ${index}`;
console.log(`Odd of ${teamStr} ${value}`)
};
const Name = new Map([[1, 6]]);
console.log(Name);
// const gameEvents = new Map([
//   [17, '⚽ Goal'],
//   [36, '🔁 Substitution']
//   [47, '⚽ Goal'],
//   [61, '🔁 Substitution'],
//   [64, '🟨 Yellow card'],
//   [69, '🟥 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ Goal'],
//   [80, '⚽ Goal'],
//   [92, '🟨 Yellow card'],
// ]);
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
//console.log(events);
gameEvents.delete(64);
//console.log(gameEvents.values());
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);
const theEvent = gameEvents.entries();
for (const [time, event] of theEvent){
  if (time < 45){
    console.log(`[FIRST HALF] ${time}: ${event}`);
  } else{
    console.log(`[SECOND HALF] ${time}: ${event}`);
  }
  
}
//console.log(theEvent);