import terms from './action-terms';

export const truckArrival = (text, id) => ({
    type: terms.truckArrival,
    text,
    id
});

export const unloadTruck = (id) => ({
    type: terms.unloadTruck,
    id
});

export const planRoute = (text, id) => ({
    type: terms.planRoute,
    text,
    id
});

export const loadTruck = (id) => ({
    type: terms.loadTruck,
    id
});

export const truckDeparture = (id) => ({
    type: terms.truckDeparture,
    id
});
