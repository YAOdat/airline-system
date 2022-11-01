'use strict';
const events = require('./events.js');
require('./manager.js');
require('./pilot.js');

events.on('newFlight', (payload) => {
    console.log(`event: ${payload.event} time: ${payload.time} details: ${payload.Airline}, ${payload.flightID}, ${payload.pilotName}, ${payload.Destination}`);
});

