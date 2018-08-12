import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';


//Create a new store using shoppingLIstItemReducer as the 'reducer' function for handling actions
const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  //Provider component, from react-redux, allows us to avoid passing 'store', as a prop, to App
  //This is the only place where store needs to be passed into the App.
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
