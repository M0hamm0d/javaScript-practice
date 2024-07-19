'use strict'
// const animal = {
//     type: 'monkey',
//     eat(){
//         return 'Muhammad is eating';
//     }
// };
// let rabbit = {
//     age: 10,
//     __proto__: animal
// };
// let longEar = {
//     earLength: 10,
//     __proto__:rabbit
// }
// //rabbit.__proto__ = animal
// console.log(rabbit.__proto__);
// console.log(rabbit.type);
// console.log(rabbit.eat());
// //console.log(Object.getOwnPropertyNames(rabbit.__proto__.__proto__));
// //animal.prototype.speak = 'hello'
// //animal2.__proto__ = animal;
// //console.log(animal2.__proto__ === animal.prototype);
// //console.log(animal2,animal2.__proto__, animal2.__proto__.__proto__, animal2.type);
// //console.log(animal.hello);
// // console.log(animal.toString());
// // console.log(animal.hasOwnProperty('t'));
// //console.log(animal.__proto__);
// //console.log(Object.getPrototypeOf(animal));
// //console.log(Object.getOwnPropertyNames(animal.__proto__));

// let animals = {
//     walk() {
//       if (!this.isSleeping) {
//         alert(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
// };

// let rabbits = {
//     name: "White Rabbit",
//     __proto__: animals
// };
// rabbits.age = 18;
// console.log(rabbits.age);
// rabbits.sleep();
// console.log(rabbits.isSleeping);
// let pet = {
//     eats: true
// };
// let myRab = {
//     jumps: true,
//     __proto__:pet
// };
// console.log(Object.keys(myRab));
// for(let key in myRab){
//     let isOwn = rabbit.hasOwnProperty(key);
//     if(isOwn){
//         console.log(`Our: ${key}`);
//     } else{
//         console.log(`Inherited: ${key}`);
//     }
// };


// let head = {
//     glasses: 1
// };
  
// let table = {
//     __proto__:head,
//     pen: 3
// };
  
// let bed = {
//     __proto__:table,
//     sheet: 1,
//     pillow: 2
// };

// let pockets = {
//     __proto__:bed,
//     money: 2000
// };
// console.log(pockets.pen);

// let ani = {
//     eats: true
// };
// function Rabbit(name) {
//     this.name = name;
// };
// Rabbit.prototype = ani;
// let rab = new Rabbit("White Rabbit");
// //console.log(rab.eats);

// function name(){
//     console.log('What is your name');
// };
// console.log(Rabbit.prototype);
// let obj = {};

function Person(firstName, birthYear){
    this.firstName = firstName,
    this.birthYear = birthYear
};
const matilda = new Person('Matilda', 1975);
//console.log(Object.getPrototypeOf(matilda));
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}
console.log(matilda.__proto__);
console.log(Object.getPrototypeOf(matilda))
//console.log(Person.prototype);
//console.log(matilda.calcAge());
let animal = {
    eats: true
};
let rabbit = {
    jump: false,
    //__proto__:animal
};
rabbit = Object.create(animal)
console.log(Object.getPrototypeOf(rabbit)==animal);
let dog = Object.create(animal,{
    jump:{
        value: 'That is true'
    },
    crawl: {
        value: 'Nahh'
    }
})
console.log(dog.crawl);
let admin = {
    name: 'Muhammad',
    age: 32,
    state: 'Kwara State'
};
console.log(Object.getOwnPropertyDescriptor(admin, 'name'));
Object.defineProperty(admin, 'name', {
    writable: false
});
//admin.name = 'Nasir' //error, cannot reasign to a read only property of object

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
};
user.fullName = 'Muhammad Abdussalam'
console.log(user.fullName);
console.log(Function.prototype);
Function.prototype.defer = function(time){
    setTimeout(this, time)
};
function f() {
    console.log("Hello!");
}
  
//f.defer(2000);

String.prototype.boop = function(){
    console.log('Boop!')
}
let cat = 'meow';
console.log(cat.boop());
console.log(Object.getOwnPropertyNames(Object.prototype));

console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));

let fakeArray = {
    '0': 'Zero',
    '1': 'One',
    '2':'Two',
    length: 3
};
fakeArray.__proto__ = Array.prototype;
fakeArray.map(item=>console.log(item))

let store = {
    name: null,
    stock:[
        {name: 'candy', quantity: 100},
        {name: 'fruit', quantity: 7},
        {name: 'toys', quantity: 23}
    ]
};
let myStore = {
    name: 'My Wonderful Store',
    __proto__: store
};
let yourStore = {
    name: 'Not my wonderful store',
    __proto__: store
};
myStore.stock[1].quantity = 300
console.log(myStore.stock);
console.log(yourStore.stock);