export default function shoppingListItemReducer(
    state = {
        items: []
    },
    action
) {
    console.log(action);
    switch (action.type) {
        case 'INCREASE_COUNT':
            console.log('Current state.items length', state.items.length);
            console.log('Updating state.items length to', state.items.length + 1);
            return Object.assign({}, state, {
            	// add items length value to the array
                items: state.items.concat(state.items.length + 1)
            });
 
        default:
            console.log('Initial state.items length:', state.items.length);
            return state;
    }
}
