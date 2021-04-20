export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		case 'ADD_ITEM':
			console.log("Adding item: " + action.item)
			return {...state, items: state.items.concat(action.item)}
		default:
			return state;
	}
}
