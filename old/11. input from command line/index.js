

const fs = require('fs');

const value = process.argv;

// fs.writeFileSync(value[2],value[3]);

// Making it little bit Advance

if(value[2] == 'add') {
    fs.writeFileSync(value[3],value[4]);
} else if(value[2] == 'remove') {
    fs.unlinkSync(value[3]);
} else {
    console.log('Invalid Ibnput');
}