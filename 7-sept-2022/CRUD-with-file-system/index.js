// CRUD with the file System


const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/apple.txt`;

// create a file

// fs.writeFileSync(filePath,'This is an apple');

// Read the file

// fs.readFile(filePath,'utf-8',(error,items)=>{
//     console.log(items);
// });


// Without utf-8 this file system will look like this:-
// <Buffer 54 68 69 73 20 69 73 20 61 6e 20 61 70 70 6c 65>

// Update

// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) {
//         console.log('file is updated');
//     }
// });

// Rename

// fs.rename(filePath,`${dirPath}/fruit.txt`,(error)=>{
//     if(!error) {
//         console.log("File Renamed");
//     }
// });

// Delete file

fs.unlinkSync(`${dirPath}/fruit.txt`);