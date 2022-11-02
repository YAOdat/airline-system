'use strict';
require('dotenv').config()

const io = require('socket.io-client');
const url = process.env.URL;
const socket = io.connect('http://localhost:3001');


const airline = io.connect(`http://localhost:3001/airline`);

socket.on('new-flight', (flight) => {
    setTimeout(() => {
        console.log(`Pilot: ${flight.flightID} flight took-off`);
        airline.emit('take-off', flight);
    }, 14000);
    
    setTimeout(() => {
        console.log(`Pilot: ${flight.flightID} flight has arrived`);
        socket.emit('arrived', flight);
    }, 17000);
});