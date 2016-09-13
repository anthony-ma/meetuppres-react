"use strict";

var truckArrival = function truckArrival(text) {
    return {
        type: terms.truckArrival,
        text: text
    };
};

var unloadTruck = function unloadTruck() {
    return {
        type: terms.unloadTruck
    };
};

var planRoute = function planRoute(text) {
    return {
        type: terms.planRoute,
        text: text
    };
};

var loadTruck = function loadTruck() {
    return {
        type: terms.loadTruck
    };
};

var truckDeparture = function truckDeparture() {
    return {
        type: terms.truckDeparture
    };
};
//# sourceMappingURL=C:\src\meetuppres-react\september-meetup\app\actions.js.map