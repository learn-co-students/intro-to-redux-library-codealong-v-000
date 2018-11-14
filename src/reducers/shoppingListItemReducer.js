export default function shoppingListItemReducer(state = {items: []}, action) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			return {...state, items: state.items.concat(1)};

		default:
			return state;
	}
}
