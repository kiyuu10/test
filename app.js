var util = require("util");

function Person() {
    this.firstName = "Hoa";
    this.lastName = "Mai";
}

Person.prototype.sayHello = function() {
    console.log("Hello " + this.firstName + " " + this.lastName);
}

function Student() {
    Person.call(this);
    this.id = "1234";
}

util.inherits(Student, Person);

var sv = new Student();
sv.firstName = "huy";
sv.lastName = "vu";
sv.sayHello();
sv.sayHello();
sv.sayHello();