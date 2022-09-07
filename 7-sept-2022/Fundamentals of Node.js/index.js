var x = 10;
let y = 50;
const z = 99;

x = 2929;
y = 1212;
// z = 8989;

// Here we can't reassign the value in the const type of variables.



console.log(x + y + z);

console.log(x);

if (x == 2929) {
    console.log('matched');
}

if (x === 20) {
    console.log('matched')
} else {
    console.log('Type is not same type means data type here');
}

for (i = 1; i < 11; i++) {
    console.log(i);
}

const arr = [2, 4, 3, 8, 7, 1, 5, 9, 6, 10,'3'];

console.log(arr);

console.log(arr[0]);

// we will import x and y value from the app.js


const app = require('./app');

console.log(app);

console.log("x value is" + app.x);

console.log("y value is " + app.y);

console.log("z value is :-  "+app.z);



// Interview Question

// Q.> What is the use case of filter function
            // OR
// How to find specific value from the array.

// Filter function accepts an function as a parameter.
let result = arr.filter((item)=>{
    console.log(item);
    // if we only want any specific value then
    // console.log("Only specific values :- ");
    return item === 3;
});


console.log("Only specific values :- ");
console.log(result);


result = arr.filter((item) => {
    return item>4;
});

console.log("Items whose values are >4 will be printed");
console.log(result);