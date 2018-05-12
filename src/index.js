import React from 'react';
import ReactDOM from 'react-dom';
//importing the createStore function from Redux. instead of making it
import { createStore } from 'redux';
//to talk with the extension in chrome
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

//like we did previously, we call our createStore() method passing in the reucer we also added in args to make chrome dev tool work
const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  //added provider component to talk with dev tool
  <Provider store={store}>
  {/* pass our newly created store to our App component as a prop */}
  <App store={store} />,
  </Provider>,
  document.getElementById('root')
);

//we reference a createStore method from the Redux library and call that in index.js.