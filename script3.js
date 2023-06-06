const log = console.log;

// 1 double the array

// let numbers = [1,2,3,4];

// function make_it_double(arr) {
//     let newArr = [];
//     arr.forEach((element) => {
//         newArr.push(element*2);
//     });
//     return newArr;
// }
// log(make_it_double(numbers));

// 2 array length

//let numbers = [1,2,6,3,4];

// function showLength(arr) {
//     return arr.length;
// }
// log(showLength(numbers));

// 3 sort ASC

//let array = ['d','c','a','b'];

// function arrSort(arr) {
//     let sortedArr = arr.sort();
//     return sortedArr;
// }
// log(arrSort(array));

// 4  combine 2 arrays

// function combineTwo(arr1, arr2) {
//     let combined =  arr1.concat(arr2);
//     return combined;
// }
// log(combineTwo(numbers,array));

// 5 arrow function sum

// const arrowFuncSum = (a,b) => {
//     return a+b;
//  }

//  log(arrowFuncSum(2,2));

// 6 rest operator

// function sumAll(...args) {
//     let sum = 0;
//     if(!args){
//         sum = 0;
//     }
//     else {
//         args.forEach(arg => {
//             sum += arg;
//         });
//     }
//     return sum;
// }
// log(sumAll());
// log(sumAll(1,2,3));

// 7 scope error explanation

// function print() {
//     let name = "Tolga";
//     log(name);
// }
// print();
// log(name); 
// // it gives ReferenceError because we created the name variable
// // inside the block and we tried to call at outside of it.
// // program cannot catch reference at out of scope.

// 8 inner function 

// function outerFunc() {
//     let outer = 'Hello!';

//     function innerFunc() {
//         log(outer);
//     }

//     return innerFunc;
// }
// const inner = outerFunc();
// inner();

//9 recursive

function recursiveFactorial(num) {
    if(num === 0) return 1;
    else return num * recursiveFactorial(num-1);
}
log(recursiveFactorial(6));
