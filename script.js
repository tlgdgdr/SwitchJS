let log = console.log; //logging


// funtion that takes two numbers as parameters and returns their sum

function sumTwoNumbers(a,b) {
    return a + b;
}

log(sumTwoNumbers(2,2)) 

/*----------------------------*/

// function that checks if given value is string or not

let variable = "Assignment";

function isString(x) {
    if (typeof x === "string") return true;
    else return false; 
}
log(isString(variable));

/*----------------------------*/

// function that checks if given value is primitive or not

let value = false;

function isPrimitive(x) {
    if(typeof x === "object") return false;
    else return true;
}
log(isPrimitive(value));

/*----------------------------*/

// concept of hoisting

//In Javascript, variables are able to use before declaration. They are being hoisted to the top of the program. To prevent it we should not be using "var" keyword to declare variables. 
//Because let(const) are giving errors but var is being undefined. This is a bad programming example. 

//var a;
//let b;

log(a); // undefined
//log(b); // ReferenceError

var a = 'tolga';
let b = 'dagidir'

log(a); // tolga
log(b); // dagidir

/*----------------------------*/

// var, let, const comparison and differences

//var is the older way of declaring variable, undefined when hoisting, global scope. 
//let is newer, reassignable, error when hoisting, block scope.
//like let but cannot reassign. constant values.

/*----------------------------*/

// function that checks if given value is object or not

let c = { message: 'Tolga'}

function isObject(param) {
    if(typeof param === "object") return true;
    else return false;
}

log(isObject(c));