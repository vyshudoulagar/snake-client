const { keys, messages } = require("./constants"); //importing keys object from constants

let connection;

const setupInput = (conn) => {
    connection = conn;  //assigning conn value to global connection
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

const handleUserInput = (key) => {
    if (key === '\u0003') {
        process.exit();
    }
    if (keys[key]) {   // checking if keys object contains the key
        connection.write(keys[key]);  // sending the key value to server
    }
    if (messages[key]) {
        connection.write(messages[key]);
    }
};

module.exports = { setupInput };