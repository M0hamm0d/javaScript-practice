'use strict';
console.log('-----, day2, ----');

//spread syntax
let aRR  = [1, 2, 3];
let ar1 = [5, 6, ...aRR];//[5, 6, 1, 2, 3]
//without ...syntax
let ar2 = [5, 6, aRR]//[5, 6, [1, 2, 3]]
// second use of ... syntax. passing argument into a function
console.log(ar1)//[5, 6, 1, 2, 3],
//copy ar1
console.log(...ar1);//5 6 1 2 3 without square bracket
//same as
//console.log(5, 6, 1, 2, 3);

//const newMenu = [...restaurant.mainMenu, 'Gnocci']
//console.log(newMenu);
console.log('-----, day1, ----');
//Destructuring examples
const arr = [2, 3, 4];
const [x, y, z] = arr;
//so x = 2, y = 3, z = 3

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    orderDelivery: function({
        time,
        address,
        mainIndex,
        starterIndex
    }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will  be delivered to ${address} at ${time}`)
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },
    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
    },
    orderPizza: function(mainIng, ...otherIng){
        console.log(mainIng);
        console.log(otherIng);
    }
};
restaurant.orderPizza('onion', 'Mushroom', 'olives')
const ingredient = ['water', 'Indomitable', 'Onions']
console.log(restaurant.orderPasta(...ingredient));
//longer method
//console.log(restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]));

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex:2,
    starterIndex: 2,
})

//spread operator on object
const obj = {FoundedIn: 1987,...restaurant, founder: 'Muhammad'}

//rest operator on array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);//1, 2, [3, 4, 5]

const [pizza, , Risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFoods); //pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//rest operator on object
const {sat, ...weekDays} =  restaurant.openingHours

//receive 2 return values from a function  
const [starter, mainCourse] = restaurant.order(2, 0);
//console.log(restaurant.order(2, 0))//[ 'Garlic Bread', 'pizza' ]
//console.log(starter, mainCourse);// Garlic Bread pizza 
const nested = [2, 4, [5,6]]
// nested destruction
const [one, , [i, j]] = nested;
//console.log(one, i, j);//2, 5, 6

//default value
const [p = 1, q = 1, r = 1] = [2, 4]
//console.log(p, q, r);// 2, 4. 1

//Exercise
let words = ['|||'];
//console.log(words.length);
let [firstName, lastName] = 'John Smith'.split(' ');
//destructure copies item into variables
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//console.log(name1, name2, rest);
//syntax for object destructuring
//let {var1, var2} = {var1:..., var2:...}

//Nested destruction
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

function showMenu({size:{width:w, height:h} = {}, items:[firstItem, secondItem] = [],}){
    console.log(w, h, firstItem, secondItem);
}
showMenu(options)
let {
    size:{
        weight,
        height
    },
    items:[item1, item2],
    title = 'Menu'
} = options

let user = {
    Name: "John",
    years: 30
};
let {Name, years, isAdmin = 'false'} = user;
console.log(Name, years, isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalaries({John = 100, Pete = 300, Mary = 250} = null) {
    let maxSalary = 0;
    let maxName = null
    for (let [key, value] of Object.entries(salaries)) {
        if(maxSalary < value){
            maxSalary = value;
            maxName = key;
        }
        return maxName
        //console.log(`${key}:${value}`); // name:John, then age:30
    }
}
//console.log(topSalaries(salaries));
