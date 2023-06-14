let log = console.log; //logging

//1

// function Person(_name, _age) {
//     this.name = _name;
//     this.age = _age;
    
//     this.introduce = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
//     };
// };
// let p1 = new Person('Tolga',28);
// p1.introduce();

//2

// function Car(_make, _model, _year){
//     this.make = _make;
//     this.model = _model;    
//     this.year = _year;
// }


// Car.prototype.charge = function() {
//     return `${this.make}-${this.model}(${this.year}) is being charged.`
// }
// let hybrid = new Car('Honda','HRV',2019);

// log(hybrid.charge());

//3

// let obj1 = {
//     x: 'first object',
// };
// let obj2 = {
//     x: 'second object',
// };
// let sum = function(a,b) {
//     log(a+b);
//     log(this.x);
// };

// sum.call(obj1,1,2);

// //4

// let findLength = function(...arr){
//     log(arr.length);
//     log(this.x);
// }

// findLength.apply(obj2,[1,2,3,4]); //obj2 in previous answer

//5 

// const obj = {
//     x : 10,
//     getX: function() {
//         return this.x;
//     }
// };
// const unboundGetX = obj.getX;
// log(unboundGetX());

// const boundGetX = unboundGetX.bind(obj);
// log(boundGetX());

//6

// function Book(_title, _author) {
//     this.title = _title;
//     this.author = _author;
// }

// let book = new Book('Harry Potter','JK Rowling');
// log(book);

//7

//In javascript, at the beginning, there is null and then Object prototype
// when we create, we use constructor of this main object and thats why we have
//the connection between parent object and we share props and methods with it.

//8

class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    static calculateArea(r) {
        return r.width * r.height;
    }
}
let r1 = new Rectangle(3,4);
let r2 = new Rectangle(4,6);
log(r1);
log(Rectangle.calculateArea(r2)); 
