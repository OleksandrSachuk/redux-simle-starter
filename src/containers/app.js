import React, { Component } from 'react';
import { connect } from 'react-redux';
import Name from '../components/name';

class App extends Component {
  render() {
    return (
      <div className="container">
          <br/>
          <div className="row">
              <Name />
          </div>
      </div>
    );
  }
}
function maptStateToProps(state) {
    return{
        name: state.name
    }
}
export default connect(maptStateToProps)(App);
