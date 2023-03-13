const fs = require('fs');
const path = require('path');

const interpreter = require('./interpreter');

const sourceCode = fs.readFileSync(path.resolve(process.argv[2]), 'utf-8');

interpreter(sourceCode);
