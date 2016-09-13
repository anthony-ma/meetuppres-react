'use strict';

var store = Redux.createStore(appReducer);

var resultDiv = document.getElementById('result');
function render() {
  resultDiv.innerHTML = JSON.stringify(store.getState());
};

render();

store.subscribe(render);

document.getElementById('truck-arrival').addEventListener('click', function () {
  store.dispatch(truckArrival());
});

document.getElementById('unload-truck').addEventListener('click', function () {
  store.dispatch(unloadTruck());
});

document.getElementById('plan-route').addEventListener('click', function () {
  store.dispatch(planRoute('a new place'));
});

document.getElementById('load-truck').addEventListener('click', function () {
  store.dispatch(loadTruck());
});

document.getElementById('truck departure').addEventListener('click', function () {
  store.dispatch(truckDeparture());
});
//# sourceMappingURL=C:\src\meetuppres-react\september-meetup\app\app.js.map