import React from 'react';
import ReactDOM from 'react-dom';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
import { createStore } from 'redux'; /* code change */

const store = createStore(shoppingListItemReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__         /* code change */
  && window.__REDUX_DEVTOOLS_EXTENSION__()    /* code change */
); 

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
