// export let x = 10;
// export let y = 20;

// we have to move these file's value to the index.js file


// These export x and y value will only work in the javascript but not in the node.js


module.exports = {

    x: 1020304050,
    y: 209999999,

    // we can also make function in this module
    z: function () {
        return 41;
    }
}