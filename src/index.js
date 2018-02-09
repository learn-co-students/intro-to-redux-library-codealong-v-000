import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from 'src/reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer); /* code change */

ReactDOM.render(
  <App store={store} />, /* code change */
  document.getElementById('root')
);
