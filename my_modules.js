"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.subNum = exports.addNum = void 0;
function addNum(a, b) {
    return a + b;
}
exports.addNum = addNum;
function subNum(a, b) {
    return a - b;
}
exports.subNum = subNum;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, I am ".concat(this.name, " and I am ").concat(this.age));
    };
    return Person;
}());
exports.Person = Person;
