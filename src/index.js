import React from 'react';
import ReactDOM from 'react-dom';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
import {createStore } from 'redux'

const store = createStore(shoppingListItemReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()); )

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
