// console.log('Start Execution');


// // Stoping the thread
// setTimeout(() => {
//     console.log('Logic Execution');
// }, 2000);
// // setTimeout makes the thread sleep for few seconds

// console.log('Complete Execution');

// /*
// This is the output that we got and this shows node.js is a async language

// Start Execution
// Complete Execution
// Logic Execution


// */

// Another examples

let x = 20;
let y = 0;

setTimeout(() => {
    y = 100;
}, 2000);

console.log(x+y);

// Output of this code is 20