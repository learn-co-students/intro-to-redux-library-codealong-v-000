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
		default:
			return state;
	}
}


// The code below is the same as above but with logging info to the console
// export default function shoppingListItemReducer(
// 	state = {
// 	  items: []
// 	},
// 	action
//   ) {
// 	console.log(action);
// 	switch (action.type) {
// 	  case 'INCREASE_COUNT':
// 		console.log('Current state.items length %s', state.items.length);
// 		console.log('Updating state.items length to %s', state.items.length + 1);
// 		return {
// 		  ...state,
// 		  items: state.items.concat(state.items.length + 1)
// 		};
   
// 	  default:
// 		console.log('Initial state.items length: %s', state.items.length);
// 		return state;
// 	}
//   }