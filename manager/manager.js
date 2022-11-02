'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config()

const io = require('socket.io-client');

const url = process.env.URL;
// const socket = io.connect(url);

const socket = io.connect('http://localhost:3001/');



setInterval(() => {
    let flightDetails = {
        airline: 'Royal Jordanian',
        flightID: faker.datatype.uuid(),
        pilot: faker.name.fullName(),
        destination: faker.address.city(),
        time: faker.date.future(),
    };
    socket.emit('new-flight', flightDetails);
    console.log(`Manager: A new flight with ID ${faker.datatype.uuid()} has been scheduled`);

}
    , 10000);

socket.on('arrived', (flight) => {
    console.log(`Manager: Thanks a bunch to our professional pilot, ${flight.pilot}`);
}
)

