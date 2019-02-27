export default function shoppingListItemReducer(
	state = { items: 0 },
	action
) {
	switch (action.type) {
		case 'INCREASE_COUNT':
		debugger
			return state.items + 1
		// .concat(state.items.length + 1);

		default:
			return state;
	}
}
