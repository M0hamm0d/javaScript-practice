// function pow(x , n){
//     if (n == 1){
//         return x
//     } else {
//         return x * pow(x, n - 1)
//     }
// };
// //console.log(pow(2,4));

// fizbuzz(3,9);
// function fizzbuzz(startNum, endNum) {
//     if (startNum === endNum) {
//         return
//     }
//     if(startNum % 3 == 0 ){
//         console.log('fizz');
//     } else if(startNum % 5 == 0 ){
//         console.log('buzz')
//     } else{
//         console.log(startNum)
//     }
//     fizzbuzz(startNum + 1, endNum)
// }
// //fizzbuzz(3,9);

// let company = {
//     sales: [{name: 'John', salary: 1000},{name: 'Alice', salary: 1600}],
//     development: [{name: 'Peter', salary: 2000},{name: 'Alex', salary: 1800}]
//     // development: {
//     //     sites: [{name: 'Peter', salary: 2000},{name: 'Alex', salary: 1800}],
//     //     internals:[{name: 'Jack', salary: 1300}]
//     // }
// }
// function sumSalaries(department) {
//     //console.log(department);
//     if (Array.isArray(department)){
//         return department.reduce((acc, item)=> acc+ item.salary, 0)
//     } else{
//         let sum = 0;
//         for (let subdep of Object.values(department)){
//             console.log(subdep);
//             sum+= sumSalaries(subdep)
//             console.log(sum);
//         }
//         return sum
//     }
// };
// //sumSalaries(company)
// function sumTo(n) {
//     if (n == 1){
//         return n
//     } else{
//         console.log(n);
//         return n * sumTo(n - 1)
//     }
// };
// //console.log(sumTo(5));
// function sumAll(...args) { // args is the name for the array
//     let sum = 0;
  
//     for (let arg of args) {
//         console.log(arg);//1 2 3
//         console.log(sum);
//         sum += arg;//1
//     }
  
//     return sum;
// };
// //console.log(( sumAll(1, 2, 3) ));











//RELEARNING RECURSION
function fetchWater(count){
    if (count === 5){
        console.log('completed');
        return 
    }
    console.log('fetching water...');
    fetchWater(count + 1)
}
//console.log(fetchWater(0));;

function pow(x, n){
    if (n == 1){
        return x
    };
    return x * pow(x,n-1)
}

function na(x, y) {
    if(y == 1){
        return x
    }
}
//console.log(na(4, 1));

//recursive array transverse
function trans(arr) {
    if (arr.length === 0){
        return arr
    }
    console.log(arr[0]);
    trans(arr.slice(1))
};
//console.log(trans([1,2,3,4,5]));

function traverseObject(obj) {
    if (typeof obj !== 'object') {
      return; // base case
    }
    console.log(obj); // process the current object
    for (const key in obj) {
      traverseObject(obj[key]); // recursive call with the nested object
    }
};
const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    }
};
//traverseObject(obj); 
function sumTo(n){
    if (n === 0){
        return 1
    }
    return n + sumTo(n-1)
}
console.log(sumTo(5));

let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};
function sumSalaries(salaries) {
    if (Array.isArray(salaries)){
        return salaries.reduce((acc, item) => acc+item.salary, 0)
    } else {
        let sum = 0
        for (let key of Object.values(salaries)){
            sum += sumSalaries(key)
        }
        return sum
    }
    
};
console.log(sumSalaries(company));

  
  



