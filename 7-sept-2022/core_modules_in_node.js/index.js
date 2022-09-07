// Core modules


// console.log("Abhinav Jha");

// Here console is already made in the pacakge and we don't have to make any of them so that's the reason we call it as core modules.

// FileSystem , Buffer , HTTP these all are our core modules.

//2. What are golbal modules.

//  Global modules are those kind of modules whom we don't have to import
// exmaple console.log() --> we don't have to import these modules so these are called as global modules.

const fs = require('fs');

fs.writeFileSync("Hello.txt","This file is generated using fs.writeFileSync");

// Here fs is the non-global module and we have to import fs.
// Those modules whom we have to import is called as non-global.

console.log("Directory name is ------>  "+__dirname);
console.log("File name is ------> ",__filename);