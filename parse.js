const fs = require('fs');
const PEG = require('pegjs');

const grammar = fs.readFileSync('grammar.pegjs', 'utf8');
const parser = PEG.generate(grammar);

module.exports = function(sourceCode) {
  return parser.parse(sourceCode);
};