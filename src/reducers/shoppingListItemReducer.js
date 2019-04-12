export default function shoppingListItemReducer(state={items:[]}, action) {
	console.log(action);
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.items length: ', state.items.length);
			console.log('Updating state.items length to: ', state.items.length + 1);
			// Concatenate the previous state.items and a number equal to the number of items in state.items plus 1. That adds a number to the end of the items array.
			return state.items.concat(state.items.length + 1);
		default:
			console.log('Initial state.items length: ', state.items.length);
			return state;
	}
}
