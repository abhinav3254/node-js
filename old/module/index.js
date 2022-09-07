// Those module which we have to import is called non-global module

// import filesystem

const FileSystem = require('fs');

console.log("hi Abhinav");

//  and console is global module which we don't have to import

FileSystem.writeFileSync("hello.txt","Hii this is the tutorial of node js which i am learning from youtube and youtube channel name is code step by step");


FileSystem.writeFileSync("hello2.txt","node js is an backend tool it is not an programming language");

console.log("directory name is ------>> ",__dirname);
// This function returns the directory name

console.log("Print the file name with directory",__filename);
// This function return the file name