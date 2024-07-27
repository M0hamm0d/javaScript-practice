//Export before declaration
export function sayHi() {
    console.log('Hello, I am from modules');
}

export class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
//Exporting an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

//Export apart from declaration

function SayHello(user){
    console.log(`Hello, ${user}`);
}
function sayBye(user) {
    alert(`Bye, ${user}!`);
}
export { sayHi, sayBye }

//import 
import { sayHi, sayBye } from "...";
//sayHi(), sayBye()

//we can import as object if we have a lot to export import * as obj
import * as say from ".."
say.sayHi()