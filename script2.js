//npm install prompt-sync
const prompt = require('prompt-sync')();

let log = console.log; // logging

/*---------------------------------------*/

// 1

let numbers = [1,2,3,8,4];
let sum=0;

function sumEvenNumbers(array) {
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
    return String(first).concat(' ',String(second));
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
let fact = 1;
let i = 1;

function calcFactorial(x) {
    
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

let make = 'Toyota';
let model = 'Corolla';
let year = '2019';

let Car = new Object(make,model,year);

Car.getInfo = function(){
    return `${make} - ${model} - ${year}`;
}
log(Car.getInfo());
