export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	 console.log(action);
	 switch (action.type) {
			case 'INCREASE_COUNT':
				// state.items will look like this: '[1,2,3], i.e. every extra item means another number larger by one is added'
				console.log('Current state.items length %s', state.items.length);
				console.log('Updating state.items length to %s', state.items.length + 1);
				// this creates a copy of the state object with only the value for items updated:
				return Object.assign({}, state, {
				  items: state.items.concat(state.items.length + 1)
				 });

			 default:
				 console.log('Initial state.items length: %s', state.items.length);
				 return state;
	 }
}
