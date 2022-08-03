const net = require("net");
const connect = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput); //To handle user input.
  return stdin;
};

const handleUserInput = function(input) { //To handle user input.
  if (input === '\u0003') { //Means Ctrl + C.
    process.exit();
  }
};

console.log("Connecting ...");
connect();
setupInput();