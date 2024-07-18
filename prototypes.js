const animal = {
    type: 'monkey',
    eat(){
        return 'Muhammad is eating';
    }
};
let rabbit = {
    age: 10,
    __proto__: animal
};
let longEar = {
    earLength: 10,
    __proto__:rabbit
}
//rabbit.__proto__ = animal
console.log(rabbit.__proto__);
console.log(rabbit.type);
console.log(rabbit.eat());
//console.log(Object.getOwnPropertyNames(rabbit.__proto__.__proto__));
//animal.prototype.speak = 'hello'
//animal2.__proto__ = animal;
//console.log(animal2.__proto__ === animal.prototype);
//console.log(animal2,animal2.__proto__, animal2.__proto__.__proto__, animal2.type);
//console.log(animal.hello);
// console.log(animal.toString());
// console.log(animal.hasOwnProperty('t'));
//console.log(animal.__proto__);
//console.log(Object.getPrototypeOf(animal));
//console.log(Object.getOwnPropertyNames(animal.__proto__));

let animals = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
};

let rabbits = {
    name: "White Rabbit",
    __proto__: animals
};
rabbits.age = 18;
console.log(rabbits.age);
rabbits.sleep();
console.log(rabbits.isSleeping);
let pet = {
    eats: true
};
let myRab = {
    jumps: true,
    __proto__:pet
};
console.log(Object.keys(myRab));
for(let key in myRab){
    let isOwn = rabbit.hasOwnProperty(key);
    if(isOwn){
        console.log(`Our: ${key}`);
    } else{
        console.log(`Inherited: ${key}`);
    }
};


let head = {
    glasses: 1
};
  
let table = {
    __proto__:head,
    pen: 3
};
  
let bed = {
    __proto__:table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__:bed,
    money: 2000
};
console.log(pockets.pen);