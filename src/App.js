import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button handleOnClick={(event) => this.handleOnClick(event)} >Click</button>
        <p>{this.props.storre.getState().items.length}</p>
      </div>
    );
  }
};

export default App;
