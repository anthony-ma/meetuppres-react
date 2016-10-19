const truckArrival = (text, id) => ({
    type: terms.truckArrival,
    text,
    id
});

const unloadTruck = (id) => ({
    type: terms.unloadTruck,
    id
});

const planRoute = (text, id) => ({
    type: terms.planRoute,
    text,
    id
});

const loadTruck = (id) => ({
    type: terms.loadTruck,
    id
});

const truckDeparture = (id) => ({
    type: terms.truckDeparture,
    id
});
