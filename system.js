'use strict';
const events = require('./events.js');
require('./manager.js');
require('./pilot.js');

events.on('newFlight', (flightDetails) => {
    console.log(`Captain ${flightDetails.pilotName}: flight with ID '${flightDetails.flightID}' is taking off..`);
    events.emit('takeoff', flightDetails);
});

events.on('inAir', (flightDetails) => {
    console.log(`Captain ${flightDetails.pilotName}: flight with ID '${flightDetails.flightID}' is landing..`);
    events.emit('landing', flightDetails);
}
);

events.on('landed', (flightDetails) => {
    console.log(`Captain ${flightDetails.pilotName}: flight with ID '${flightDetails.flightID}' has arrived at ${flightDetails.Destination} at ${flightDetails.time}`);
    events.emit('flightArrival', flightDetails);
}
);
