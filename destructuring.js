'use strict';

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
    }
};
//object Destructuring
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
//or if someone want to change the variable name
const {name:restaurantName, openingHours: hours, categories: tags} = restaurant
console.log(restaurantName, hours, tags);
// setting a default value
// const {name:restaurantName = [], openingHours: hours = 0, categories: tags = 'no value'} = restaurant

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};
({a, b} = obj)

//Nested object
const { fri: {open, close} } = openingHours



//array Destructuring
let [main, secondary] = restaurant.categories;
console.log(main, secondary);//main = Italian and secondary = Pizzeria
//switching variables
[main, secondary] = [secondary, main]
//so now main = secondary vice versa
console.log(main, secondary)
restaurant.order(2, 0)// Garlic Bread pizza

//receive 2 return values from a function  
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
const nested = [2, 4, [5,6]]
// nested destruction
const [one, , [i, j]] = nested;
console.log(one, i, j);//2, 5, 6

//default value
const [p = 1, q = 1, r = 1] = [2, 4]
console.log(p, q, r);// 2, 4. 1

//Exercise
let words = ['|||'];
console.log(words.length)
