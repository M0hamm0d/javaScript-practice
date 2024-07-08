let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};
//console.log(student);
let json = JSON.stringify(student);
//console.log(json);
//console.log( JSON.stringify([1, 2, 3]) );
let user = {
  name: "John Smith",
  age: 35
};
let toJson = JSON.parse(JSON.stringify(user));
//console.log(toJson);
//console.log(JSON.stringify(user));



let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (value === meetup && key != "")? undefined:value
}));
  