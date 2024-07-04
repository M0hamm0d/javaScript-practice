//let curDate = new Date();
let Jan01_1970 = new Date(0);
//console.log( Jan01_1970 );
//console.log(curDate);
//let dday = new Date(2004, 10, 24);
//let date = new Date('2024-06-04T14:04:000Z')
//let date = new Date(0)// date computer thinks date started1970-01-01T00:00:00.000Z
//let date = new Date(17000000000)//in milliseconds
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let dayWeek = date.getDay()
let day = date.getDay();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
//2024 6 4 4 14 56 25
console.log(year, month,dayWeek,  day, hour, min, sec);
//setting date;
const setDate = new Date();
setDate.setFullYear(2025);
setDate.setMonth(6);
setDate.setDate(11);
setDate.setHours(12);
setDate.setMinutes(23);
setDate.setSeconds(10);
//2025-07-11T11:23:10.789Z
console.log(setDate);
// comparing date and time
const date1 = new Date(2023-12-31);
const date2 = new Date(2024-1-1);
if (date2 > date1) {
    console.log('HAPPY NEW YEAR');
}//Happy New Year;
let today  = new Date();
