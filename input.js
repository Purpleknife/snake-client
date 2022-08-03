const connect = require("./client");

let connection;

const setupInput = function (conn) {
  connection = conn;
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
  if (input === 'w') {
    connection.write('Move: up');
  }
  if (input === 'a') {
    connection.write('Move: left');
  }
  if (input === 's') {
    connection.write('Move: down');
  }
  if (input === 'd') {
    connection.write('Move: down');
  }
};


module.exports = setupInput;