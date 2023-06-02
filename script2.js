//npm install prompt-sync
const prompt = require('prompt-sync')();

let log = console.log; // logging

/*---------------------------------------*/

// 1

let numbers = [1,2,3,8,4];

function sumEvenNumbers(array) {
    let sum=0;
    for(let i of array){
        if(i%2==0) {
            sum += i;
        }
    }
    return sum;
}

log(sumEvenNumbers(numbers));

/*---------------------------------------*/

//2

let first = prompt("first value: ");
let second = prompt("second value: ");

function concatValues(a,b) {
    return String(a).concat(' ',String(b));
}

log(concatValues(first, second));

/*---------------------------------------*/

//3

let m = 3;
let n = -5;
let zero = 0;

function numbersType(x) {
    if(x>0) return 'Positive';
    else if(x<0) return 'Negative';
    else return 'Zero';
}

log(numbersType(m));
log(numbersType(n));
log(numbersType(zero));

/*---------------------------------------*/

//4

let num = 6;

function calcFactorial(x) {
    let fact = 1;
    let i = 1;
    while(i <= x) {
        fact *= i;
        i++;
    }
    return fact;
}

log(calcFactorial(num));

/*---------------------------------------*/

//5

const person = {
    name: 'Tolga',
    age: 28,
    greet: function(){
        return `Hello my name is ${this.name}`;
    }
}

log(person.greet());

/*---------------------------------------*/

//6


function Car(a,b,c){
    this.make = a;
    this.model = b;
    this.year = c;
    
    this.getInfo = function(){
        return `${this.make} - ${this.model} - ${this.year}`;
    };
}

let c1 = new Car('Toyota','Corolla','2019');
log(c1.getInfo());
