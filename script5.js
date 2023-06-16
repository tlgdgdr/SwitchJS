let log = console.log;

//1

//with synchronous, code runs in sequence, line by line. 
//with asynchronous, code can be executed without waiting previous lines be executed

// //synchronous
// log('first');
// log('second');
// log('third');

// log('------');
// //asynchronous
// log('first');
// setTimeout(() => log('second'),1000);
// log('third');

//2

// const print =function() {
//     setTimeout(() =>{log('Hello World!');
// },2000);
// }

// print();

// clearTimeout(print);
// print();

//3

// let i = 5;

// let interval = setInterval(() => {
//     log(i++);
// },1000);

// setTimeout(() => {
//     clearInterval(interval);
//     log('increase stopped')
// },4000);

//4

// let p = new Promise((resolve, reject) => {
//     let x = 10;
//     //resolve(x); //fulfilled
//     reject(x); //rejected
// })

// p.then((x1) => {
//     log(x1);
//     return x1 * 2;
// }).then((x2) => {
//     log(x2);
// }).catch((err) => {
//     log(err, ' is not good!');
// })

//5

// async function print() {
    
//     try {
//         const p = await delay(1000);
//         log(p);
//     } catch (e) {
//         log('No result!');
//         log('promise has failed with an error', e);
//     }
// }

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         //resolve(ms);
//         //reject(new Error('bad thing happened'));
//         setTimeout(resolve,ms,42);
//         //setTimeout(reject, ms, new Error('bad things happened!'));
//     })
// }

// print();

//6

/*
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
throw new ValidationError("error message 1");
throw new ValidationError("another error message");
*/
/* With prototypes */
function ValidationError_V2(message = "") {
  this.message = message;
  this.stack = Error().stack;
}
ValidationError_V2.prototype = Error.prototype;
ValidationError_V2.prototype.name = "Very Very Critical Error";
try {
  throw new ValidationError_V2("some message here!");
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}