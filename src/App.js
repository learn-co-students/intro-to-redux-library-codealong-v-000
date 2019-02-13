import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.items
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

/*
// As the first argument passed in to connect(), mapStateToProps is used for selecting the part of the data from the store 
// that the connected component (App in this example) needs. 
// mapStateToProps is called every time the Redux store state changes.
// The 1st argument to a mapStateToProps function is the entire Redux store state,
// which is the same value returned by calling store.getState()
// mapStateToProps function should return a plain object that contains the data the component needs.
// Each field in the returned object will become a prop for your actual component.
// The values in the fields will be used to determine if your component needs to re-render.
// Looking at mapStateToProps arrow function above, we know that App connected component will receive: props.items

// As the second argument passed in to connect(), mapDispatchToProps is used for dispatching actions to the store.
// mapDispatchToProps lets you create functions that dispatch when called, and pass those functions as props to your component.
// Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. 
// It lets you provide action dispatching functions as props. 
// From App, I can now call this.props.increaseCount() directly (see above)
// The mapDispatchToProps function will be called with dispatch as the first argument. 
// You will normally make use of this by returning new functions that call dispatch() inside themselves, 
// and either pass in a plain action object directly or pass in the result of an action creator.
// mapDispatchToProps function should return a plain object:
// Each field in the object will become a separate prop for your own component, 
// and the value should normally be a function that dispatches an action when called.
// If you use action creators (as oppose to plain object actions) inside dispatch, 
// it is a convention to simply name the field key the same name as the action creator.
// The return of mapDispatchToProps function will be merged to your connected component as props.
// You may call them directly to dispatch its action.
*/