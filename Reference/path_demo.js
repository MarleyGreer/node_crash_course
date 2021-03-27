const path = require("path");

// Base file name
console.log(path.basename(__filename));
// Output => path_demo.js

// Directory Name
console.log(path.dirname(__filename));
// Output => /Users/danielmcgill/code/MarleyGreer/Node.js Practise/node_crash_course/Reference

// // File extention
console.log(path.extname(__filename));
// Output => .js

// Create Path Object
console.log(path.parse(__filename));
// Output =>
// {
//     root: '/',
//     dir: '/Users/danielmcgill/code/MarleyGreer/Node.js Practise/node_crash_course/Reference',
//     base: 'path_demo.js',
//     ext: '.js',
//     name: 'path_demo'
//   }

// Access item within the path.parse object above
console.log(path.parse(__filename).name);
// Output => path_demo

// Concatenate Paths
console.log(path.join(__dirname, "test", "hello.html"));
// Output => /Users/danielmcgill/code/MarleyGreer/Node.js Practise/node_crash_course/Reference/test/hello.html
