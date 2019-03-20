import React, { Component } from 'react';
import './App.css';
import Timer from './timer/Timer.js'

class App extends Component {
  render() {
    return (
        <Timer
            duration={5}
            onFinish={() => console.log('finished')}
        />
    );
  }
}

export default App;
