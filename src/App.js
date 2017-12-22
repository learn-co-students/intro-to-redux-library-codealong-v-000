import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleOnClick() {
      this.props.store.dispatch({
        type:'INCREASE_COUNT',
      })
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
        Click
        </button> //place button on page that dispatches action to increase the count
        <p>{this.props.store.getState().items.length}</p>
      </div>
    );
  }
};

export default App;
