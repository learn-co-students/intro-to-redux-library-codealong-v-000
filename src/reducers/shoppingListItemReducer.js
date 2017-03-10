export default function shoppingListItemReducer(state = {items: []}, action) {
  console.log(action)
  switch(action.type) {
    case 'INCREASE_COUNT':
      console.log("Current state.items length %s", state.items.length)
      console.log("Updating state.items length to %s", state.items.length + 1)
      let items;
      items = state.items.concat(state.items.length + 1)
      let proposedstate = Object.assign({}, {items: items})
      console.log(proposedstate)
     return proposedstate;
    default:
      console.log("Initial state.items length: %s", state.items.length)
      return state;
  }
}
