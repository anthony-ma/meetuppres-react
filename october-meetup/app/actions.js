"use strict";

var truckArrival = function truckArrival(text, id) {
    return {
        type: terms.truckArrival,
        text: text,
        id: id
    };
};

var unloadTruck = function unloadTruck(id) {
    return {
        type: terms.unloadTruck,
        id: id
    };
};

var planRoute = function planRoute(text, id) {
    return {
        type: terms.planRoute,
        text: text,
        id: id
    };
};

var loadTruck = function loadTruck(id) {
    return {
        type: terms.loadTruck,
        id: id
    };
};

var truckDeparture = function truckDeparture(id) {
    return {
        type: terms.truckDeparture,
        id: id
    };
};
//# sourceMappingURL=G:\projects\meetuppres-react\october-meetup\app\actions.js.map