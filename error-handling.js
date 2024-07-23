try{
    console.log('catch')
} catch (err){
    console.log(`I found one error which is: ${err.name}` );
};
let json  = '{"name":"John", "age": 30}'
try {
    let user = JSON.parse(json);
    console.log(user.name);
} catch (err) {
    console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
    console.log(err.name);
    console.log(err.message);
}


let jason = '{ age": 30 }';
try{
    let user = JSON.parse(jason);
    if(!user.name){
        throw new SyntaxError('No name property')
    } 

} catch (err){
    console.log(err.message);
    // if (err instanceof SyntaxError){
    //     console.log('JSON Error: ' + err.message );
    // } 
    
}

// try {
//     let message = 'hello there';
//     console.log(message);
//     //throw new SyntaxError('Try to fix this code')
// } catch(err){
//     console.log(err);
// };
// try {
//     let user  = {
//         name: 'Muhammad',
//         age: 30
//     }
//     console.log(user.profile.color);
// } catch (error) {
//     console.log(error);
// }
//console.log('eat');

console.log('Program Started');
// try {
//     throw new Error('Uh oh!');
// } catch (error) {
//     console.log(error);
// }
console.log('Program Completed');

// for(let i = 1; i <= 10; i++){
//     try{
//         console.log(i);
//         if(i == 5){
//             throw new Error('BOOM!')
//         } 
//     } catch(error){
//         console.log(`loop on number ${i}`);
//         //console.log(error);    
//     }
// }

let user = {
    name: 'Misha',
    age: 22,
    settings:{
        color: 'Blue'
    }
}
console.log('Creating user');
try{
    console.log(user.profile.color);
} catch(error){
    console.log('I found one error');
}
//console.log('User Created');

let number;
try {
    number = 1337;
    number+=(Math.random()*1000)
    console.log(number);
    if(number < 2000){
        throw new Error('You lose')
    }
} catch (error) {
    console.log(error);
    console.log(number);
}
try{
    lalala
} catch(err){
    console.log(err.message);
}


function readData(){
    let json  = '{ "age": 30 }';

    try{
        bla()
    } catch (err){
        console.log('I got you');
        if (!(err instanceof SyntaxError)){
            throw err
        }
    }
}
try{
    readData()
} catch(err) {
    console.log("External catch got: " + err);
}

// The "pseudocode" for the built-in Error class defined by JavaScript itself
// class Error {
//     constructor(message) {
//       this.message = message;
//       this.name = "Error"; // (different names for different built-in error classes)
//       this.stack = <call stack>; // non-standard, but most environments support it
//     }
// }

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = 'ValidateError'
    }
}
function readUser(json){
    let user = JSON.parse(json);

    if(!json.name){
        throw new ValidationError('No field: Name')
    }

    if(!json.age){
        throw new ValidationError('No field: Age')
    }

    return user
}

try{
    readUser('{ "age": 25 }')
} catch(err){
    if (err instanceof ValidationError){
        console.log("Invalid data: " + err.message);
    } else if(err instanceof ReferenceError){
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err
    }
    // console.log('This is' + ' ' +err.name + ' ' +'called'+ ' ' + err.message);
}

class FormatError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name
    }
}