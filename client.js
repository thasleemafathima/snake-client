const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    conn.write("Name: TFP");
    
  });

  conn.on('connect', () => {
    conn.write("Say: stay strong");
    
  });
  
  //conn.on('connect', () => {
    //conn.write("Move: w");
    //conn.write("Move: a");
   // conn.write("Move: s");
    //conn.write("Move: d");
  //})

  return conn;
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */






module.exports = connect;