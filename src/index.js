import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

// here we are importing the 'createStore' function from Redux. we pass our createStore() method a reducer
// next we tell our application to communicate with this extension
const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); /* code change */

ReactDOM.render(
  <Provider store={store}>
    <App store={store} /> // and then we pass our newly created sotre to our app component as a prop.
  </Provider>,
  document.getElementById('root')
);
