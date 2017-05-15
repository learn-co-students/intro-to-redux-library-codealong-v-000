export default function shoppingListItemReducer(state = {items: []}, action) {
  console.log(action)
  switch(action.type) {

    case 'GET_COUNT_OF_ITEMS':
      let items;
      items = state.items.concat(state.items.length + 1)
      let proposedstate = Object.assign({}, {items: items})
      console.log(proposedstate)
      return proposedstate;

    case 'INCREASE_COUNT': 
      console.log("Current state.items length %s; updating +1", state.items.length); 
      return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });  
    default:
      console.log(state)
      return state;
  }
}
