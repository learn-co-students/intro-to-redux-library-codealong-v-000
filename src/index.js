// ./src/index.js

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux' /* code change */

import shoppingListItemReducer from './reducers/shoppingListItemReducer'
import App from './App'
import './index.css'

/* pass through the reducer to the createStore method */
const store = createStore(
	shoppingListItemReducer,
	/* access the browser to find the redux-devtool extension and */
	/* execute it so that the application can communicate with it */
	/* https://github.com/zalmoxisus/redux-devtools-extension */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) /* code change */

ReactDOM.render(<App store={store} /* code change */ />,
	document.getElementById('root'))	
