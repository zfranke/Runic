function interpreter(input) {
  // Split the input into lines
  const lines = input.split('\n');

  const environment = {};
  for (const line of lines) {
    // Check if the line contains the evoke statement
    if (line.includes('evoke')) {
      // Extract the identifier from the parentheses
      const identifier = line.match(/\(([^)]+)\)/)[1];
      console.log(environment[identifier]);
    } else {
      // Split the line into parts by space characters
      const parts = line.split(" ");
      if (parts[0] == ("rune")) {
        const identifier = parts[1];
        // Concatenate the rest of the parts to get the value, and trim the semicolon off the end
        const value = parts.slice(3).join(" ").replace(';', '');
        environment[identifier] = value;
      }
    }
  }
}

module.exports = interpreter;


