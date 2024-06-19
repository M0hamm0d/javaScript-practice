let map = new Map();
map.set('name', 'Muhammad');
//console.log(map.get('name'));//Muhammad
map.set('age', 25);
//console.log(map.size);//2
console.log(map)
for (let key of map.keys()){
    console.log(key);
}
/*for (let key of map.values()){
    console.log(key);//Muhammad, 25
};
*/
/*for (let key of map.entries()){
    console.log(key);//[ 'name', 'Muhammad' ][ 'age', 25 ]
}
*/
//map.forEach()
/*map.forEach((value, key, map) => {console.log(` the key is ${key} and the value is ${value} inside the map ${map}`)});
the key is name and the value is Muhammad inside the map [object Map]
the key is age and the value is 25 inside the map [object Map]
*/


let theMap = new Map([
    [1, 'num1'],
    ['1', 'str1'],
    [true, 'bool1']
]);
/*for(let key of theMap.entries()){
    console.log(key)//[ 'name', 'Muhammad' ][ 'age', 25 ][ 1, 'num1' ]
} 
*/
//console.log(theMap.get(1));//num1


// object.entries(obj)
let obj = {
    name: 'Abdussalam',
    Age: 99
}

let newMap = new Map(Object.entries(obj));
/*for (let key of newMap.entries()){
    console.log(key)//[ 'name', 'Abdussalam' ][ 'Age', 99 ]
}
*/
//Object.fromEntries();

let mapEx = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
])

let fromEntries = Object.fromEntries(mapEx);
//console.log(fromEntries);//{ banana: 1, orange: 2, meat: 4 }


//map exercise
let mexico = new Map([
    ['id', 24],
    ['name', 'Mexico'],
    ['capital', 'Mexico City'],
    ['neighbours', ['USA', 'Guatenala', 'Belize']]
])
//console.log(mexico.get('name'));//Mexico
mexico.set('id', 25);
mexico.get('neighbours').push('Honduras')
//console.log(mexico);//'neighbours' => [ 'USA', 'Guatenala', 'Belize', 'Honduras' ]


let myPet = new Map([
    ['name', 'Sudo'],
    ['type', 'Dog'], 
    ['breed', 'poodle'],
    ['age', 7],
    ['friends', ['Bit', 'Byte', 'Data']]
]);
//console.log(myPet);
myPet.set('color', 'Black');
myPet.set('breed', 'Beagle');
myPet.get('friends').pop();
myPet.get('friends').push('Chip');
//console.log(myPet);

const banana = {
    name: 'banana',
    quantity: 1,
    price: 1.95
};
const apple = {
    name: 'apple',
    quantity: 1,
    price: 1.45
};
const candy = {
    name: 'candy',
    quantity: 1,
    price: 3.50
};

let store = new Map([
    ['storeNumber', 5],
    ['locationCity', 'Milan'],
    ['locationCountry', 'Italy'],
    ['product', [banana, apple, candy]]
]);
//console.log(store);
//console.log(store.get('product').pop());
/*for (let i = 0; i < store.get('product').length; i++){
    console.log(store.get('product')[i])
}
*/    
store.get('product')[0].price = 1.75;
//console.log(store.get('product')[0]);

let houseForSale = new Map ([
    ['area', 'gle'],
    ['value', 320000],
    ['streetName', 'Fifth Street'],
    ['built', 2012],
    ['owner', {name: 'MM', age: 29}],
    ['offers', [296000, 295000, 315000, 312000]]
]);
//console.log(houseForSale);
//houseForSale.delete('built');
//console.log(houseForSale);
houseForSale.get('owner').age = 30;
console.log(houseForSale);
[296000, 295000, 315000, 312000].reduce((sum, current)=> {
    sum + current
}, 0)

//Filter unique array members
function unique(arr) {
    let newSet = new Set(arr);
    return newSet
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));

let numbers = new Set([1,2,3,4,5,2,3,4]);
console.log(numbers);
let points = [10, 20, 10, 30, 15, 15, 35, 16, 10];
function uN(arr){
    let Values = [];
    for (let point of arr){
        if(!Values.includes(point)){
            Values.push(point)        
        }
    }
    return Values
}
console.log(uN(points))

let items = [
    {name: 'banana', quantity: 1, price: 1.95},
    {name: 'apple', quantity: 1, price: 1.45},
    {name: 'banana', quantity: 10, price: 0.05},
    {name: 'candy', quantity: 1, price: 3.50}
]
let result = []
let duplicate = new Set()
//result.push(duplicate.add(items[0]));
//result.push(duplicate.add(items[1]));
//result.push(duplicate.add(items[2]));
//result.push(duplicate.add(items[3]));
//console.log(result);
for (let i = 0; i < items.length; i++){
    if (duplicate.has(items[i].name)){
        continue
    } 
    result.push(items[i]);
    duplicate.add(items[i].name)
}
console.log(result);