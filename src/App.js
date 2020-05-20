import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          Now
        </header>
        <p className="App-intro">
          Replacing content in this header to my name Harmandeep Mand
        </p>
        <ExampleComponent />
        <ExampleComponent />
        <TestComponent/>
      </div>
    );
  }
}

export default App;
