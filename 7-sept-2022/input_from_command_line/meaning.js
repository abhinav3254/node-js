const fs = require('fs');
const input = process.argv;

// fs.writeFileSync(input[2],input[3]);

// input[2] -->creates a new file with that name.
// input[3] --> writes the text in that file.

/*

_command_line$ node meaning.js abhinav Hello this is abhinav kumar jha
abhinav@abhinav-Lenovo-Legion-5:~/Desktop/node-js/7-sept-2022/input_from_command_line$ node meaning.js apple 'This is an apple'
abhinav@abhinav-Lenovo-Legion-5:~/Desktop/node-js/7-sept-2022/input_from_command_line$ 

This is what we have written and got the output

*/


if (input[2]=='add') {
    fs.writeFileSync(input[3],input[4]);
} else if (input[2] == 'del') {
    fs.unlinkSync(input[3]);
} else {
    console.log('Invalid Output');
}

/*

abhinav@abhinav-Lenovo-Legion-5:~/Desktop/node-js/7-sept-2022/input_from_command_line$ node meaning.js apple 'This is an apple'
abhinav@abhinav-Lenovo-Legion-5:~/Desktop/node-js/7-sept-2022/input_from_command_line$ node meaning.js add orange 'This is an orange'
abhinav@abhinav-Lenovo-Legion-5:~/Desktop/node-js/7-sept-2022/input_from_command_line$ node meaning.js del orange


*/