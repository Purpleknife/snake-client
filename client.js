const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => { //Added this event handler to see a msg from the server.
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to Game Server. Yahooo!');
    conn.write('Name: HN'); //Send msg to Server.
  });
  
  return conn;
};

module.exports = connect;