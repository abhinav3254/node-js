console.log("Input From the Command Line");

console.log(process.argv);
// argv means argument vector
// process is a very big method in the node.js
// when we run console.log(process.argv); from the terminal and provide the name in the terminal then we see three output


/*

command_line$ node index.js abhinav
Input From the Command Line
[
  '/usr/bin/node',
  '/home/abhinav/Desktop/node-js/7-sept-2022/input_from_command_line/index.js',
  'abhinav'
]
abhinav@abhinav-Leno:~/Desktop/node-js/7-sept-2022/input_from_command_line$ 

*/

// This above shows how this work

const getVal = process.argv[2];
console.log(getVal);

// this will print the 3 index value bcz it is an array indexing start from 0th index.
// Here output will be abhinav