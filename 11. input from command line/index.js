

const fs = require('fs');

const value = process.argv;

fs.writeFileSync(value[2],value[3]);