const fs = require('fs');
// fs.writeFileSync('apple.txt','This is an Apple');
// This won't create a new file inside our folder named folder
// and we can't create 10 files same time inside our folder

// For doing these all kinds of operations we will do these
const path = require('path');
const dirPath = path.join(__dirname,'folder');
console.warn(dirPath);

for(i = 0;i < 5 ;i++) {


    // fs.writeFileSync('apple.txt',"This is a simple text file");


    // This will create one file only bcz it will override bcz of same name
    // so we are going to change the file name or making the file name dynamic
    // Here we will learn how to make file name dynamic

        //  1 way
    // fs.writeFileSync("hello"+i+".txt","A simple text file");

        // 2 way
    fs.writeFileSync(dirPath+`/hello${i}.txt`,'This is an apple');
    // we can use either way

}

// Time where I Have stopped 02:03:36