export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  switch(action.type) {
  console.log(action);
    case 'INCREASE_COUNT':
      return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });
      console.log("Current state.items length", state.items.length);
        console.log("updating state.items length", state.items.length+1);

    default:
      console.log("Initial state.items length", state.items.length);
      return state;
  }
}
