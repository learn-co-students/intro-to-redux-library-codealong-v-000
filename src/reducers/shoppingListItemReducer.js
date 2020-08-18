// how to use the createStore() method:
// we can rely on the Redux library to provide this method, 
// we still need to write our own reducer to tell the store what the new state 
// will be given a particular action. 
// when using the createStore() method, and passing through a reducer, we are able 
// to change the state. We were able to see these changes 
// by hooking our application up to a Chrome extension called Redux Devtools, 
// and then providing the correct configuration.

export default function shoppingListItemReducer(
	state = {
	  items: []
	},
	action
  ) {
	console.log(action);
	switch(action.type) {
  
	  case 'INCREASE_COUNT':
		console.log("Current state.items length %s", state.items.length);
		console.log("Updating state.items length to %s", state.items.length + 1);
		return {
		  ...state,
		  items: state.items.concat(state.items.length + 1)
		}
  
	  default:
		console.log('Initial state.items length: %s', state.items.length);
		return state;
	}
  }