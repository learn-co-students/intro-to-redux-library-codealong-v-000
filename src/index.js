import React from 'react';
import ReactDOM from 'react-dom';
//---- Importing from Redux  library ----//
import { createStore } from 'redux';
//---- Importing handmade reducer ----//
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

// tell our application to use the  Redux Devtools Chrome extension in Google Chrome
//with 'window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()'//

const store = createStore(shoppingListItemReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
