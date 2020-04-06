export default function shoppingListItemReducer(
  state = {
    items: []
  },
  action
) {
	// Ok, so this may look like a lot, but really all were doing is adding some logging behavior.
  console.log(action);
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log("Current state.items length %s", state.items.length);
      console.log("Updating state.items length to %s", state.items.length + 1);
      return {
        ...state,
        items: state.items.concat(state.items.length + 1)
      }

    default:
      console.log('Initial state.items length: %s', state.items.length);
      return state;
  }
}
