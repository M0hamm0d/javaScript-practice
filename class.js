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