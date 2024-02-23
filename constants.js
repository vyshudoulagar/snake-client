const IP = "10.0.0.71";
const PORT = "50541";

const keys = { //assigning moving values to wasd
    'w': "Move: up",
    'a': "Move: left",
    's': "Move: down",
    'd': "Move: right"
};

const messages = { //broadcasts messages when 1 and 2 are pressed
    '1': "Say: Hello",
    '2': "Say: I am coming for you"
};

module.exports = { IP, PORT, keys, messages };