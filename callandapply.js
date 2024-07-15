const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings:[],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${flightNum}`,
            name: `${name}`
        })
    }
};
lufthansa.planes = 300

//lufthansa.book(635, 'Muhammad Abdussalam');
//lufthansa.book(782, 'Abdullahi Abdussalam');
//console.log(lufthansa);
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

function addTaxRate(rate){
    return function(value){
        return value + value * rate
    }
};
const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));
const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
};



let book = lufthansa.book;
//book(23, 'Sarah Williams')// doesnt work;
//book.call(euroWings, 23, 'Sarah Williams');
//book.call(euroWings, 23, 'Musa Williams');
//book.call(euroWings, 23, 'MM yogurt');
//book.apply(euroWings, [41, 'M yogurt'])
//console.log(euroWings);

const bookEW = book.bind(euroWings);
const bookLh = book.bind(lufthansa)
bookEW(23,'Moh');

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: []
};
//book.call(swiss, 456, 'Masalami');
//book.call(swiss, 314, 'salami');
//book.apply(swiss, [45, 'Nasir Abdussalam']);
//console.log(swiss);



//JAVASCRIPT.INFO CALL AND APPLY SECTION;
// function slow(x){
//     console.log(`called with ${x}`);
//     return x
// };
// let resX = slow(5);
// console.log(resX);

function sayHi(){
    console.log(this.name);
}
let user = { name: "John" };
let admin = { name: "Admin" };

//sayHi.call(user);

function say(phrase) {
    console.log(this.name + ':' + phrase);
}
say.call(user, 'Hello');

function hash() {
    console.log( [].join.call(arguments) ); // 1,2
}
  
//hash(1, 2);

// let car  = {wheel: 4};
// function paint(c) {
//     return function(car){
//         car.color = c
//     }
// };
// paint('red')(car);
// console.log(car);

let Car  = function(){
    let car = {wheel: 4};
    paint('red')(car);
    return car
}
function paint(c) {
    return function(car){
        car.color = c
    }
};
let myCar = Car()
//console.log(myCar);



function slow(x){
    console.log(`called with ${x}`);
    return x
};
console.log(slow);
function cachingDecorator(func){
    let cache = new Map();
    return function(x){
        if (cache.has(x)){
            return cache.get(x)
        } 
        let result  = func(x)
        cache.set(x, result);
        console.log(cache)
        return result
    };
}
let nam = cachingDecorator(slow);
console.log( nam(1) ); // slow(1) is cached and the result returned
console.log( "Again: " + nam(1) ); // slow(1) result returned from cache

console.log( nam(2) ); // slow(2) is cached and the result returned
//console.log( "Again: " + slow(2) );

//nested function
function outer(){
    console.log('outer');
    function inner() {
        console.log('inner');   
    }
    inner()
};
//outer();

function out(x){
    function iny(y){
        return x + y
    }
    return iny
};

//anonymous function same as callback function

function foo(bar){
    bar()
};
// foo(function(){
//     console.log('bar')
// });
function named(){
    console.log('bar');
}
//foo(named);

//Higher order function can also be a function returning a function
function returningF(){
    return function(){
        console.log('I am return')
        return 5
    }
};
let ret = returningF();
//console.log(ret());


function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
}

function spy(func) {
    return function(){

    }
}