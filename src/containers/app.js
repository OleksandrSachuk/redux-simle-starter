import React, { Component } from 'react';
import Name from '../components/name';

export default class App extends Component {
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