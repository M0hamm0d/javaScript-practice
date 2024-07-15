function sayHi(phrase, who) {
    console.log(phrase + ',' + who);
};
//setTimeout(sayHi, 1000, 'Hello', 'Muhammad');
//let timerId = setTimeout((name)=> console.log(`My name is ${name}`), 2000, 'Muhammad');
//clearTimeout(timerId);
//let timerId = setInterval(() => console.log('tick'), 3000);
//setTimeout(()=>{clearInterval(timerId); console.log('stop')},5000);
// setTimeout(() => {
//     console.log('Hello')
// }, 5000);

// let timer = setTimeout(function tick() {
//     console.log('tick');
//     timer = setTimeout(tick, 2000);
// }, 2000);

let delay = 1000;
// let timerId = setTimeout(function request(){
//     console.log('send your request');
// },delay);
let i = 1;
// setTimeout(function run(){
//     console.log(i++);
//     setTimeout(run, 5000)
// }, 100)
// setInterval(() => {
//     console.log(i++);
// },500)

function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(() => {
        console.log(current);
        if (current === to){
            console.log('I am done');
            clearInterval(timerId)
        } ;
        // current++
    }, 1000);
}
//printNumbers(5, 10);
// function printNumber(from, to) {
//     let current = from;
//     setTimeout(function rerun(){
//         console.log(current);
//         if (current < to){
//             setTimeout(rerun, 2000)
//         }
//         current++
//     }, 1000);
// };
function printNumber(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
        current++;
      }
      current++;
    }, 1000);
  }
  
printNumber();