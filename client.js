const { setupInput } = require("./input");
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
    const conn = net.createConnection({
        host: IP, // IP address here,
        port: PORT // PORT number here,
    });

    conn.on("connect", () => {
        console.log("Successfully connected to game server!");
        conn.write("Name: VD"); //giving a name to snake
        conn.write("Say: Hai"); //adding a message with name
    });

    conn.on("data", (data) => {
        console.log("Server says: ", data); // when a data is received from server
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    return conn;
};

module.exports = { connect };