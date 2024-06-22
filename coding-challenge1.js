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
// console.log(`Odd of victory ${game.team1}: ${value.team1}`);
// console.log(`Odd of victory Draw: ${value.x}`); 
// console.log(`Odd of victory ${game.team2}: ${value.team2}`); 
// console.log(value);  
}

// let players1 = [
//     'Neuer', 
//     'Pavard', 
//     'Martinez', 
//     'Alaba', 
//     'Davies', 
//     'Kimmich', 
//     'Goretzka', 
//     'Coman', 
//     'Muller', 
//     'Gnarby', 
//     'Lewandowski', 
// ];
// let players2 = [
//     'Burki', 
//     'Schulz', 
//     'Hummels', 
//     'Akanji', 
//     'Hakimi', 
//     'Weigl', 
//     'Witsel', 
//     'Hazard', 
//     'Brandt', 
//     'Sancho', 
//     'Gotze', 
// ];
// let gk = 'Neuer';
// let fieldPlayers = [
//     'Pavard', 
//     'Martinez', 
//     'Alaba', 
//     'Davies', 
//     'Kimmich', 
//     'Goretzka', 
//     'Coman', 
//     'Muller', 
//     'Gnarby', 
//     'Lewandowski',
// ]
// let allPlayers = [
//     'Neuer', 
//     'Pavard', 
//     'Martinez', 
//     'Alaba', 
//     'Davies', 
//     'Kimmich', 
//     'Goretzka', 
//     'Coman', 
//     'Muller', 
//     'Gnarby', 
//     'Lewandowski',
//     'Burki', 
//     'Schulz', 
//     'Hummels', 
//     'Akanji', 
//     'Hakimi', 
//     'Weigl', 
//     'Witsel', 
//     'Hazard', 
//     'Brandt', 
//     'Sancho', 
//     'Gotze', 
// ]
// let players1Final = [
//     'Neuer', 
//     'Pavard', 
//     'Martinez', 
//     'Alaba', 
//     'Davies', 
//     'Kimmich', 
//     'Goretzka', 
//     'Coman', 
//     'Muller', 
//     'Gnarby', 
//     'Lewandowski', 
//     'Thiago',
//     'Coutinho',
//     'Perisic'
// ]

// let team1 = game.odds.team1;
// let draw = game.odds.x;
// let team2 = game.odds.team2;
// console.log(team1,draw,team2);
// function printGoals() {
    
// }
