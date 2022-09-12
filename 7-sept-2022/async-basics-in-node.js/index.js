console.log('Start Execution');


// Stoping the thread
setTimeout(() => {
    console.log('Logic Execution');
}, 2000);
// setTimeout makes the thread sleep for few seconds

console.log('Complete Execution');

/*
This is the output that we got and this shows node.js is a async language

Start Execution
Complete Execution
Logic Execution


*/