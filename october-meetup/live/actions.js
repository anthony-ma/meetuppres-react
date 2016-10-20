const truckArrival = (text) => ({
    type: terms.truckArrival,
    text
});

const unloadTruck = () => ({
    type: terms.unloadTruck
});

const planRoute = (text) => ({
    type: terms.planRoute,
    text
});

const loadTruck = () => ({
    type: terms.loadTruck
});

const truckDeparture = () => ({
    type: terms.truckDeparture
});
