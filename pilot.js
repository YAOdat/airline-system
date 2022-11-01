'use strict';

const events = require( './events.js' );
require( './manager.js' );


events.on( 'newFlight', (flightDetails) => {
    setInterval(() => {
        flightDetails.event = 'takeoff';
        console.log(`Captain ${flightDetails.pilotName}: flight with ID '${flightDetails.flightID}' is taking off.. pilotfile`);
        events.emit('takeoff', flightDetails);
    }, 14000);
    setInterval(() => {
        console.log(`Captain ${flightDetails.pilotName} flight '${flightDetails.flightID}' has arrived at ${flightDetails.Destination} at ${flightDetails.time}`);
        events.emit('flightArrival', flightDetails);
    } , 17000);
} );