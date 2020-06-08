export default function shoppingListItemReducer(state = {items: []},action) {
	console.log(action);
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.items length %s', state.items.length);
			console.log('Updating state.items length to %s', state.items.length + 1);
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			return state;
	}
}

// the reducer returns an object that represents what the updated state should be
// dispatch is what actually sets the state in the store to this return value.
