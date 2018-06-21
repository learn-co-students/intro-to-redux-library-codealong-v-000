// import React from 'react';
// import ReactDOM from 'react-dom';
// import shoppingListItemReducer from './reducers/shoppingListItemReducer';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
//

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux'; /* code change */
// import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
// import App from './App';
// import './index.css';
//
// const store = createStore(shoppingListItemReducer); /* code change */
//
// ReactDOM.render(
//   <App store={store} />, /* code change */
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
