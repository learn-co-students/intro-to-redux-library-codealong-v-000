import React, { Component, useState } from 'react';
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
				<ul>
					{JSON.stringify(this.props.items)}
				</ul>
				<ItemForm addItem={this.props.addItem}/>
			</div>
		);
	}
}

function ItemForm(props) {
	const formData = {
		name: null,
		desc: null
	}

	return(
		<form onSubmit={e=> {console.log(formData); e.preventDefault(); props.addItem(formData)}}>
			<input type="text" onChange={e=> formData.name = e.target.value}/>
			<input type="text" onChange={e => formData.desc = e.target.value} />
			<input type="submit" />
		</form>
	)
}

const mapStateToProps = state => {
	return {
		items: state.items,
		item2: state.item2
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increaseCount: _=> dispatch({ type: 'INCREASE_COUNT' }),
		action2: _=> dispatch({type: 'ACTION_2'}),
		addItem: (item) => dispatch({ type: 'ADD_ITEM', item: item})
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App);
