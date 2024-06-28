/*
computing username
let user = 'steven Mark Abdul';
let createUserName = function(value){
    value.forEach(function(mov){
        value.username = user.owner
    })
    let username = value
    .toLocaleLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
    return username;
};
console.log(createUserName(user));
*/
let kateValues = [4, 1, 15, 8, 3];
let juliaValue = [3, 5, 2, 12, 7];
let checkDog = function(dogsJulia, dogKate){
    let shallowCopy = [...juliaValue];
    shallowCopy.pop();
    shallowCopy.pop();
    shallowCopy.shift();
    let dogs = [...shallowCopy, ...kateValues]
    dogs.forEach(function(item, i){
        //return item;
        //return item >= 3? `Dog number ${i +1} is an adult, and is ${item} years old`: `Dog number ${i +1} is still a puppy.`
        console.log(item >= 3? `Dog number ${i +1} is an adult, and is ${item} years old`: `Dog number ${i +1} is still a puppy.`);
    });
};
//checkDog(kateValues, juliaValue);

const calcAverageHumanAge = function(dogAges){
    let humanAge = dogAges.map(function(item){
        return item <= 2 ? (item * 2):(16 + (item * 4))
    });
    const adult = humanAge.filter(function(item){
        return item >= 18
    });
    const average = adult.reduce(function(acc, item){
        return (acc + item)/adult.length
    })
    console.log(humanAge);
    console.log(adult);
    console.log(average);
};
//calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
//console.log(humanAge);
function camelize(str){
    return str
    .split('-')
    .map(
        (word, index) => index == 0 ?word: word[0].toUpperCase() + word.slice(1)
    )
    .join('')
};
console.log(camelize('background-color'));;
function filterRange(arr, a, b){
    return arr.filter(function(item) {
        return item >= a && item <= b
    });
};
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
//console.log(filtered);

let john = { name: "John", surname: "Smith", age: 25 };
let pete = { name: "Pete", surname: "Smith", age: 30 };
let mary = { name: "Mary", surname: "Smith", age: 28 };
function getAverageUser(arr) {
    return arr.reduce((acc, item) => acc + item.age, 0)/arr.length
};
let users = [john, pete, mary];
console.log(getAverageUser(users));
// let names = users.map(item=> ({
//     fullName: `${item.name} ${item.surname}`, age: item.age}
// ));
// console.log(names);
