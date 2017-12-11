import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleClick(event) {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT'
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleClick(event)}>click</button>
        {this.props.store.getState().items.length}
      </div>
    );
  }
};

export default App;
