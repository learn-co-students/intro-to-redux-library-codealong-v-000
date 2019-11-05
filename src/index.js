// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);


//  added Provider to wrap around app
ReactDOM.render(
    //  note: provide is lower case
    <Provider store={store}>
        <App />
     </Provider> /* code change */,
  document.getElementById('root')
);