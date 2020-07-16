// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

//importing the createStore function from Redux
//add dev tools
const store = createStore(
    shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


//By including the Provider, we'll be able to access our Redux store 
//and/or dispatch actions from any component we want,


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider> , 
document.getElementById('root'));


