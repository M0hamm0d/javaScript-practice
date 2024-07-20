function Person(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear
}
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear)
};
const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear)
    this.course = course
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
};
let rizqoh = new Student('Muhammad', 2004, 'Computer Science');
Student.prototype.constructor = Student
console.log(rizqoh.introduce());