console.log("sub");

var a = 20;
var b = 10;
var c = 20;

console.warn(a+b+c);


let x = 220;

if(x===20) {
    console.log("Inside if statement");
} else {
    console.log("inside else");
}

// Difference between == and ===

let aa = '12';

if(aa == 12) {
    // only values are matched
    console.log("==");
}
if(aa===12) {
    // Here Type is also matched
    console.log("Inside ===")
}

// loops

for(i = 1;i<11;i++) {
    console.log(i);
}

// array

const arr = [1,2,3,4,5,6,7,8]

console.log(arr);

console.log(arr[0])