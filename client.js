const net = require("net");

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: "10.0.0.71", // IP address here,
      port: "50541" // PORT number here,
    });
  
    conn.on("connect", (data) => { 
      console.log("Successfully connected to game server!");
      const message = "Name: VD";
      conn.write(message);
    });
  
    conn.on("data", (data) => {
      console.log("Server says: ", data);
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    return conn;
  };

  module.exports = {connect};