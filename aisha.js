const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
  
const account2 = {
owner: 'Jessica Davis',
movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
interestRate: 1.5,
pin: 2222,
};
  
const account3 = {
owner: 'Steven Thomas Williams',
movements: [200, -200, 340, -300, -20, 50, 400, -460],
interestRate: 0.7,
pin: 3333,
};
  
const account4 = {
owner: 'Sarah Smith',
movements: [430, 1000, 700, 50, 90],
interestRate: 1,
pin: 4444,
};
  
const accounts = [account1, account2, account3, account4];
//let user = 'Steven Thomas Williams';
const createUserName = function(account) {
    account.forEach(function(item) {
        item.username = item.owner
        .toLowerCase()
        .split(' ')
        .map(item => item[0])
        .join('');
    })
}
createUserName(accounts);
//console.log(account3);
/*const deposit = movements.filter(item => item > 0);
console.log(deposit);
const withdrawal = movements.filter(item => item < 0);
console.log(deposit, withdrawal);
*/
let movements =  [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function(acc, cur, i, arr ){
    //console.log(`Iteration ${i}: ${acc}`);
    return cur > acc? cur: acc
}, 0);
console.log(balance);
