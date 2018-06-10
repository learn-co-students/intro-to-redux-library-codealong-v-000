import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(e) => this.handleOnClick(e)} > Click </button>
        <p>
          {this.props.store.getState().items.length}
        </p>
      </div>
    );
  }
};

export default App;
