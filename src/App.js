import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT'
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleClick()}>
          Click
        </button>
        {this.props.store.getState().items.length}
      </div>
    );
  }
}

export default App;
