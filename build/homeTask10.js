"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const my_modules_1 = require("./my_modules");
class Animal {
    makeSound() {
        console.log("I am an Animal!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("meow!");
    }
}
class Dog extends Animal {
    makeSound() {
        super.makeSound();
        console.log("woof!");
    }
}
const puppy = new Dog();
const kitty = new Cat();
puppy.makeSound();
kitty.makeSound();
class connectionPoint {
    constructor(id, name, description) {
        this.ID = id;
        this.name = name;
        this.description = description;
    }
}
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop());
console.log(numberStack.peek());
console.log((0, my_modules_1.addNum)(2, 4));
console.log((0, my_modules_1.subNum)(5, 3));
const p = new my_modules_1.Person('Tolga', 28);
p.sayHello();
function log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    if (typeof originalMethod === 'function') {
        descriptor.value = function (...args) {
            console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            return result;
        };
    }
    return descriptor;
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    log // i couldn't fix it :(
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Calculator.prototype, "add", null);
const calc = new Calculator();
calc.add(2, 3);
function getValueByKey(obj, key) {
    return obj[key];
}
const human = {
    name: "Tolga",
    age: 28
};
const nameValue = getValueByKey(human, "name");
const ageValue = getValueByKey(human, "age");
console.log(nameValue);
console.log(ageValue);
//# sourceMappingURL=homeTask10.js.map