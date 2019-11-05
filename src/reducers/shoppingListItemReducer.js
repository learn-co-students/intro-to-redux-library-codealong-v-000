export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	console.log(action);
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.itemsLengths', state.items.length);
			console.log('Updating state.items length to %s', state.items.length + 1)
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			console.log('Inilital state.items length: %s')
			return state;
	}
}
