export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  console.log('action: ', action);
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log('Current state.items length %s', state.items.length);
      console.log('Updating state.items length %s', state.items.length + 1);
      return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });

    default:
      return state;
  }
}
