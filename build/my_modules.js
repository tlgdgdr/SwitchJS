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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, I am ${this.name} and I am ${this.age}`);
    }
}
exports.Person = Person;
//# sourceMappingURL=my_modules.js.map