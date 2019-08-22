import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
 
class App extends Component {
	/*When this.handleOnClick is invoked, it calls a function, this.props.increaseCount
	increaseCount is actually being provided by the new function below our App component: mapDispatchToProps*/
  handleOnClick = event => {
    this.props.increaseCount();
  };
 
  //places a button on the page with an onClick event listener pointed to this.handleOnClick
  render() {
	  	/*this.props.items.length is also a prop created from our Redux store. 
		As the store's items property increases, App will display a different number!*/
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