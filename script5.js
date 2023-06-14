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
//     let p = await delay(10000);

//     if(p) {
//         log(p);
//     }else {
//         log('No result');
//     }
// }

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         //resolve(ms);
//         //reject(new Error('bad thing happened'));
//         //setTimeout(resolve,ms,42);
//         setTimeout(reject, ms, new Error('bad things happened!'));
//     }).catch(err => log('err', err.message))
// }

// print();

//6

const ValidationError = function(msg) {
    return Object.create(Error.prototype, {
        name: {value: 'ValidateError', enumerable: true},
        message: {value: msg, enumerable: true},
    });
}; // not finished :(