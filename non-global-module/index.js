// Those module which we have to import is called non-global module

// import filesystem

const FileSystem = require('fs');

console.log("hi Abhinav");

//  and console is global module which we don't have to import

FileSystem.writeFileSync("hello.txt","Hii this is the tutorial of node js which i am learning from youtube and youtube channel name is code step by step");