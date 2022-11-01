'use strict';
const events = require('./events.js');
require('./manager.js');
require('./pilot.js');

// the system should console log the details of each event in the following format:
// event: {event name} time: {time} details: {airline, flightID, pilotName, destination}

events.on('newFlight', (payload) => {
    console.log(`event: ${payload.event} time: ${payload.time} details: ${payload.Airline}, ${payload.flightID}, ${payload.pilotName}, ${payload.Destination}`);
});

