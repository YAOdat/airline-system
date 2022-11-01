'use strict';
const events = require('./events.js');
const { faker } = require ('@faker-js/faker');
require('./pilot.js');

const airlines = ['Delta', 'Singapore', 'Turkish', 'Japan', 'Qatari', 'Saudi', 'Royal Jordanian', 'Korean', 'American', 'Southwest', 'United', 'Alaska', 'JetBlue', 'Frontier', 'Hawaiian'];

function randomAirline() {
    return airlines[Math.floor(Math.random() * airlines.length)];
}
console.log('Welcome to world flights manager');
console.log('A new flight is being scheduled, please wait...');
setInterval(() => {
    let flightDetails = {
        flightID: faker.datatype.uuid(),
        pilotName: faker.name.fullName(),
        time: new Date(),
        'Airline': `${randomAirline()} Airlines`,
        'Destination': `${faker.address.city()}, ${faker.address.country()}`,
        event: 'newFlight'
    }
    events.emit('newFlight', flightDetails);
}, 10000);

const handleNewFlight = (payload) => {
    console.log('manager', payload);
}

events.on('newFlight', handleNewFlight);

// when a flight arrives, emit the event flightarrival and salute the pilot

events.on('flightArrival', (payload) => {
    payload.event = 'flightArrival';
    console.log(`Manager: I am thankful to our wonderful pilot, ${payload.pilotName} for landing all the passengers safely. Welcome ${payload.Destination}`);
});


