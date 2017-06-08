import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { addItem } from './actions/items'
import './App.css';

class App extends Component {
  handleOnClick() {
    this.props.addItem()
    // this.props.store.dispatch({
    //   type: 'INCREASE_COUNT',
    // })
  }

  render() {
    return (
      <div className="App">
        <button onClick={(e) => this.handleOnClick(e)} >Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addItem: addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
