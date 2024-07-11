function pow(x , n){
    if (n == 1){
        return x
    } else {
        return x * pow(x, n - 1)
    }
};
//console.log(pow(2,4));

fizbuzz(3,9);
function fizzbuzz(startNum, endNum) {
    if (startNum === endNum) {
        return
    }
    if(startNum % 3 == 0 ){
        console.log('fizz');
    } else if(startNum % 5 == 0 ){
        console.log('buzz')
    } else{
        console.log(startNum)
    }
    fizzbuzz(startNum + 1, endNum)
}
//fizzbuzz(3,9);

let company = {
    sales: [{name: 'John', salary: 1000},{name: 'Alice', salary: 1600}],
    development: [{name: 'Peter', salary: 2000},{name: 'Alex', salary: 1800}]
    // development: {
    //     sites: [{name: 'Peter', salary: 2000},{name: 'Alex', salary: 1800}],
    //     internals:[{name: 'Jack', salary: 1300}]
    // }
}
function sumSalaries(department) {
    //console.log(department);
    if (Array.isArray(department)){
        return department.reduce((acc, item)=> acc+ item.salary, 0)
    } else{
        let sum = 0;
        for (let subdep of Object.values(department)){
            console.log(subdep);
            sum+= sumSalaries(subdep)
            console.log(sum);
        }
        return sum
    }
};
//sumSalaries(company)
function sumTo(n) {
    if (n == 1){
        return n
    } else{
        console.log(n);
        return n * sumTo(n - 1)
    }
};
//console.log(sumTo(5));
function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) {
        console.log(arg);//1 2 3
        console.log(sum);
        sum += arg;//1
    }
  
    return sum;
};
//console.log(( sumAll(1, 2, 3) ));
