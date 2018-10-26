// ./src/index.js

//Provider component wraps the top level component, App, in this case
//Provider is the only component where store is passed in
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

//call our createStore() method in src/index.js.
//We pass our createStore() method a reducer
//then we pass our newly created store to our App component as a prop
const store = createStore(shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);
