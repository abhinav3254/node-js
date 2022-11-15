const private = "SUPER PRIVATE"
const john = 'john';
const harry = 'harry';

console.log(module);

module.exports = { john, harry };

/*

This is inside the module and here we can see that there is exports function so we are going to use this function

Module {
  id: '.',
  path: '/home/abhinav/Desktop/node-js/Nov2022/modules',
  exports: {},
  parent: null,
  filename: '/home/abhinav/Desktop/node-js/Nov2022/modules/modules.js',
  loaded: false,
  children: [],
  paths: [
    '/home/abhinav/Desktop/node-js/Nov2022/modules/node_modules',
    '/home/abhinav/Desktop/node-js/Nov2022/node_modules',
    '/home/abhinav/Desktop/node-js/node_modules',
    '/home/abhinav/Desktop/node_modules',
    '/home/abhinav/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}

*/