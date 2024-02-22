
let connection;

const setupInput = (conn) => {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

const keys = {
    'w': "Move: up",
    'a': "Move: left",
    's': "Move: down",
    'd': "Move: right"
};

const handleUserInput = (key) => {
    if(key === '\u0003') {
        process.exit();
    }
    if(keys[key]) {
        connection.write(keys[key]);
    }
};

module.exports = { setupInput };