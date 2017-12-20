export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  console.log(action)
  switch(action.type) {
    case 'INCREASE_COUNT':
      console.log("Current state.items length %s", state.items.length)
      const a = Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });
      console.log("Current state.items length %s", state.items.length+1)
      return a
    default:
      console.log('Initial state.items.length is %s', state.items.length)
      return state;
  }
}
