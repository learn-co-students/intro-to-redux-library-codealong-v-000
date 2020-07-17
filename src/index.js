import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
 
const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 
 
// Add Provider to wrap around App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> /* code change */,
  document.getElementById('root')
);