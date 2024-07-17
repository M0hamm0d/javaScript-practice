function human(n){
    const name = n;
    function sayHi(){
        console.log(`Hi i am ${name}`);
    };
    function sayHowYouFeel(){
        console.log(`H${name} is feeling goog`);
    };
    return{
        sayHi,
        sayHowYouFeel
    }
};
let sina = human('Muhammad');
sina.sayHi();

function sayHiBye(firstName, lastName){
    function getFullName(){
        return firstName + ' ' + lastName
    };
    console.log('Hello, '+  getFullName());
};
sayHiBye('Muhammad', 'Abdussalam');
function makeCounter(){
    let count = 0;
    return function(){
        return count++
    }
};
let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

function sum(x) {
    return function(y){
        return x + y
    }
};
//console.log(sum(2)(10));

function inBetween(x, y){
    return function(a){
        return a >=x && a <= y
    }
};
let arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(arr.filter(inBetween(3, 6)));

function inArray(arr){
    return function(a){
        return arr.includes(a)
    }
};
//console.log(arr.filter(inArray([1,2,10])));
//console.log(window)

function sayHi(){
    console.log('Say Hi to me');
    sayHi.counter++;
    console.log(sayHi.counter);
};
sayHi.counter = 0;
//sayHi()

let sayByy = function func(){
    console.log('say bye');
};
//sayByy();

let sayHy = function func(who){
    if (who){
        console.log(`Hello ${who}`);
    } else {
        func('Guest')
    }
};
//sayHy();

let func = new Function ()

//let timerId = setTimeout((name)=>{console.log(`Hello ${name}`)}, 2000, 'Muhammad');
//let newT = setTimeout(()=>{console.log('television')}, 1500);
//clearTimeout(newT);
//let i = 0
// setTimeout(function tick(){
//     console.log(`counting ${i}`);
//     setTimeout(tick, 1000)
//     i++
// })
function printNumber(from, to){
    let current = from;
    setTimeout(function rerun(){
        console.log(current);
        if (current < to) {
            setTimeout(rerun, 1000)
        }
        current++
    }, 1000)
}

const person = {
    name: 'John',
    sayHello: function (greeting) {
      console.log(`${greeting}, my name is ${this.name}!`);
    }
};
let myCall =  person.sayHello;
//myCall.call(person, 'Hello')
//let bob = person.sayHello.bind(person, 'Hi');

const me = {
    name: 'Sina',
    talk(){
        return this
    }, 
    arrowTalk:()=>{
        return this
    }
};
console.log(me.talk());
console.log(me.arrowTalk());

  