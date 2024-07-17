//Nested function is when a function is declared inside another function;
function sayHiBye(firstName, lastName) {
    function getFullName(){
        return firstName + ' ' + lastName
    }
    console.log('Hello' + ' ' + getFullName());
    console.log('Hello' + ' ' + getFullName());
}
//sayHiBye('Muhammad', 'Abdussalam')

//Nader
function wrapperFunction(){
    const prices = [10, 20, 30, 40];
    const logPrices = ()=>{
        console.log(prices);
    }
    return logPrices
};
const logPrices =  wrapperFunction();
//console.log(logPrices());


function name() {
    let arr = [100, 500, 250, 40, 10];
    function logPrices() {
        return arr
    };
    return logPrices
}
let result = name();
//console.log(result);

function createCounters() {
    let counter = 0;
    function incrementCounter() {
        counter++;
        console.log(counter);
    };
    return incrementCounter
}
// let incrementCounter = createCounters();
// incrementCounter();//1
// incrementCounter();//2
// incrementCounter();//3
// incrementCounter();//4

//EX 2
function stringBuilder() {
    let result = '';
    function add(characters) {
        return result += characters
    }
    return add
};
//let builder = stringBuilder();
//let text = builder('Hello');
//text = builder('there');
//text = builder('friends');
//console.log(text);

//EX 3
function createVendingMachine() {
    let stocks = ['cola', 'chips', 'chocolate', 'Juice', 'nuts'];
    let coin = 0;
    function add25() {
        coin+=25;
        if (coin == 100){
            let text = Math.round(Math.random()*stocks.length);
            for(let i = 0; i < 1; i++){ 
                console.log(`You got ${stocks[text]}`)
                coin = 0
            }
        } else if (coin < 100){
            let result = 100 - coin;
            console.log(`Insert ${result} more coin`);
        }
    }
    return add25
};
let i = createVendingMachine();
// i();
// i();
// i();
// i();
// i();
// i();
// i();

//EX 4

function createDatabase() {
    let storage = ['apple', 'banana', 'carrot'];
    function addToDB(add) {
        storage.push(add);
        console.log(storage);
    }
    function clearDB() {
        storage =[];
        console.log(storage);
    }
    return [addToDB, clearDB]
};
let [add, del] = createDatabase();
//add('tomatoes');
del();
add('tomatoes');
//console.log(add);
//console.log(del);


//
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting}: ${name}`)
    }
};
let greeting = greet('Hello');
//greeting('Muhammad')

function inArray(arr) {
    return function(x){
        arr.includes(x)
    }
};
let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.filter(inBetween(3, 6)));

function display(param){
    param()
};
display(function(){
    console.log('Hello there')
});


