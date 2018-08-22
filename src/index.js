import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

// Note : Running everything in the app itself
// const store = createStore(shoppingListItemReducer);

// ReactDOM.render(
  
//   // Note : Use the Provider prop from 'react-redux' to remove the need to pass store as a prop everywhere (now "globally" accessible)
//   <Provider store={store}>
//     <App />
//   </Provider>, 
//   document.getElementById('root')
// );

// Note : Running everything with React Dev Tools chrome extension
const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); /* code change */
 
ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
