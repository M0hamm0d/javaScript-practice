//1. classes are not hoisted like function declaration meaning we cannot use them before they are declared in the code;
//2. Classes are first class citizens, we can pass them into function and return them from function
//3. classes are executed in strict mode
class PersonCl{
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    //method will be added to the prototype property
    calcAge(){
        return 2037 - this.birthYear
    }
    greet(){
        console.log(`Hey ${this.name}`);
    }
    get age(){
        return 2037 - this.birthYear
    }
    set fullName(name){
        if(name.includes(' ')){
            this._fullName = name
        } else{
            console.log(`${name} is not a full name`);
        }
    }
};
let myInfo = new PersonCl('Muhammad', 1997);
console.log(myInfo.calcAge());
class myClass{
    constructor(classMate, age){
        this.classMate = classMate;
        this.age = age
    }
};
let Faridah = new myClass('Faridah', 15);
console.log(Faridah);



//GETTERS AND SETTERS
//Regular setter and setter in regular object
const account = {
    owner: 'Jonas',
    movement: [200, 530, 120, 300],
    get latest(){
        return this.movement.slice(-1).pop()
    },
    set latest(mov){
        this.movement.push(mov)
    }
};
// console.log(account.latest); //300
// account.late = 50 
// console.log(account.movement); //[ 200, 530, 120, 300, 50 ]

//SETTER AND GETTER IN CLASSES
class Fname{
    constructor(fullName, age){
        this.fullName = fullName;
        this.age = age
    }
    get calcAge(){
        return 100 - this.age
    }
    //setters can be used for data validation
    set fullName(name){
        if(name.includes(' '))this._fullName = name;
            else{
            console.log('Input your full name');
        }
    }
    get fullName(){
        console.log(this._fullName);
    }
};
let mm = new Fname('Mohammad', 46);
console.log(mm.fullName);

class Animal{
    constructor(type, name){
        this.type = type;
        this.name = name
    }
    //Instance Method
    //Methods will be added to .prototype property so that all instances can have access to them
    calcAge(){
        console.log('I am 23 years o;d');
    }
    //static Method(Are not available on the instances)
    static hey(){
        console.log('Hello Yusuf');
        console.log(this);
    }
}
let cow = new Animal('Cow', 'Homos');
let ram = new Animal('Ram', 'Sapien');
console.log(cow);


function Person(name){
    this.name = name
};
Person.hey = function(){
    console.log('Hello Yusuf');
};
let yousuf = new Person('Yusus')
console.log(Person.hey());


//Object.create
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear)
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};
let steven = Object.create(PersonProto);
// steven.name = 'Muhammad';
// steven.birthYear = 2002;
steven.init('Mohammod', 2002);
console.log(steven);
console.log(steven.calcAge());
console.log(steven.__proto__);
const sarah = Object.create(PersonProto, {
    jump: {
        value: 'This is true'
    }
});
console.log(sarah.jump);


//More classes example
class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movement = [];
    }
    deposit(val){
        this.movement.push(val)
    }
    withdrawal(val){
        this.deposit(-val)
    }
};
const acc1 = new Account('Jonas', 'EUR', 1111)
acc1.movement.push(250);
acc1.movement.push(-132);
console.log(acc1);


class CreateCar{
    constructor(make, speed){
        this.make = make;
        this.speed = speed
    }
    accelerate(){
        this.speed+=10;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;
    }
    break(){
        this.speed-=5;
        return `${this.make} going at ${this.speed} km/h`;
    }
    get speedUs(){
        return `${this.speed/1.6} mi/h`
    }
    set speedUs(value){
        this.speed = this.speed * 1.6
    }
}

// let ex1 = new CreateCar('Ford', 120);
// class EVCl extends CreateCar{
//     #charge;
//     constructor(make, speed){
//         super(make, speed)
//         this.#charge = charge;
//     }
//     chargeBattery(chargeTo){
//         this.#charge = chargeTo;
//         console.log(this);
//     }
//     accelerate(){
//         this.speed+=20;
//         this.#charge-=1;
//         console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
//     }
// };

class Clock{
    timer
    constructor ({template}){
        this.template = template;
    }
    render() {
        date = new Date();
    
        hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }
    stop() {
        clearInterval(timer);
    }
    start() {
        render();
        timer = setInterval(render, 1000);
    }
}
let clock = new Clock({template: 'h:m:s'});
//clock.start();


//const rivian = new EVCl('rivian', 120, 23);
//console.log(rivian);



//ENCAPSULATION


class Database {
    token = 'abc123';
    constructor(){}

    saveData(data){
        this.initDBConnection()
        this.authorize()
        this.updateQuery()
    }

    initDBConnection(){}
    authorize(){}
    updateQuery(){}
};
let newDB = new Database()
newDB.saveData([1, 2, 3])
console.log(newDB);


class CoffeeMachine {
    constructor (waterLimit){
        this.waterLimit = waterLimit
    }
    
    set waterLimit(value){
        if (value < 0){
            console.log(`negative value is not possible`)
            return
        } 
        return this.waterLimit = value
    }

    // fixWaterAmount(value) {
    //   if (value < 0) return 0;
    //   if (value > this.waterLimit) return this.waterLimit;
    // }
  
    // setWaterAmount(value) {
    //   this.waterLimit = this.fixWaterAmount(value);
    // }
  
}
  
let coffeeMachine = new CoffeeMachine(-20);
//coffeeMachine.water = -30
//console.log(coffeeMachine.water);