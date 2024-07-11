const flight =  'LH234';
const jonas = {
    name: 'Jonas',
    passport: 2365409324
}
const upperFirstWord = function(str){
    let [firstWord, ...others] = str.split('');
    return [firstWord.toUpperCase(),...others].join('')
}
const transformer = function(str, fn){
    return `Transformed word:${fn(str)}`
}
console.log(transformer('what is your name', upperFirstWord));