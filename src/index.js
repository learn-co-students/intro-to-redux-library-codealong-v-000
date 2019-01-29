// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
import { createStore } from 'redux';
const store = createStore(shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    <App store={store} />
    ,
  document.getElementById('root')
);