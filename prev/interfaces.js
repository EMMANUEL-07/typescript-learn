"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log("Hi");
        }
    }
}
let user1;
let user2;
user1 = new Person('Max');
user2 = new Person();
user1.greet('Hi there, I am');
user2.greet('Hi there, I am');
