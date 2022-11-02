'use strict';

const io = require('socket.io')(3001);
const airline = io.of('/airline');

io.on('connection', (socket) => {
    socket.on('new-flight', (flightDetails) => {
        io.emit('new-flight', flightDetails);
        console.log(`Flight {
            event: 'new-flight',
            time: ${new Date().toUTCString()},
            Details: {
                airline: '${flightDetails.airline}',
                flightID: '${flightDetails.flightID}',
                pilot: '${flightDetails.pilot}',
                destination: '${flightDetails.destination}',
            }
        }`);
    });
    socket.on('arrived', (flightDetails) => {
        io.emit('arrived', flightDetails);
        console.log(`Flight {
            event: 'arrived',
            time: ${new Date().toUTCString()},
            Details: {
                airline: '${flightDetails.airline}',
                flightID: '${flightDetails.flightID}',
                pilot: '${flightDetails.pilot}',
                destination: '${flightDetails.destination}',
            }
        }`);
    });
});

airline.on('connection', (socket) => {
    socket.on('take-off', (flightDetails) => {
        console.log(`Flight {
            event: 'took-off',
            time: ${new Date().toUTCString()},
            Details: {
                airline: '${flightDetails.airline}',
                flightID: '${flightDetails.flightID}',
                pilot: '${flightDetails.pilot}',
                destination: '${flightDetails.destination}',
            }
        }`);
    });
});