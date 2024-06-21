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

let players1 = [
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
];
let players2 = [
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
];
let gk = 'Neuer';
let fieldPlayers = [
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
]
let allPlayers = [
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
]
let players1Final = [
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
    'Thiago',
    'Coutinho',
    'Perisic'
]

let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;
console.log(team1,draw,team2);
function printGoals() {
    
}
