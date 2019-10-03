export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
  console.log(action);
	switch (action.type) {
		case 'INCREASE_COUNT':
      console.log('Current state.items length is: %s', state.items.length);
      console.log('Updated state.items length to: %s', state.items.length + 1);

			return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });

		default:
        console.log('Initial state.items length is: %s', state.items.length); 
			return state;
	}
}
