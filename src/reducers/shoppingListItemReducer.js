export default function shoppingListItemReducer(state = {
  items: []
}, action) {
// Log the action //
  console.log(action);
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log("Current state.items length %s", state.items.length);
      console.log("Updating state.items length to %s", state.items.length + 1);

// If the case statement is met...
//store the state as the current state first 'Object.assign({}, state, { items: state.items.concat('Then log the updated state value here 'state.items.length + 1' within the parenthesis)'
      return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });

//  Last log the previous state under the default case statement if the state is unchanged.
    default:
      console.log("Initial state.items length: %s", state.items.length);
      return state;
  }
}
