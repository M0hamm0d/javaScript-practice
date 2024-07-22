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

try {
    let message = 'hello there';
    console.log(message);
    //throw new SyntaxError('Try to fix this code')
} catch(err){
    console.log(err);
};
try {
    let user  = {
        name: 'Muhammad',
        age: 30
    }
    console.log(user.profile.color);
} catch (error) {
    console.log(error);
}
console.log('eat');
