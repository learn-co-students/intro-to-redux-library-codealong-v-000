import React, { Component } from 'react';
//---- By modifying a component's import and export statement and included connect,
//we are able to take data from our Redux store and map them to a component's props.
//Similarly, we can also take actions, and by wrapping them in a dispatch and an anonymous function,
// be able pass them as props as well: ----//
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  handleOnClick = (event) => {
    this.props.increaseCount()
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick} >
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({type: 'INCREASE_COUNT'})
  }
}
 
//---- By modifying a component's import and export statement and included connect,
//we are able to take data from our Redux store and map them to a component's props.
//Similarly, we can also take actions, and by wrapping them in a dispatch and an anonymous function,
// be able pass them as props as well: ----//
export default connect(mapStateToProps, mapDispatchToProps)(App);
