import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import truckReducers from './truck/reducers';
import Warehouse from './Warehouse/container';
import { initialState } from './initialState';

let store = createStore(combineReducers(truckReducers), initialState);

class App extends React.Component {
   render = () => {
        return (
            <Provider store={store}>
                <Warehouse />
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
