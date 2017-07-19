import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>
  document.getElementById('root')
);
