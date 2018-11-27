import React, { Component } from 'react';

import MavBar from './components/NavBar/NavBar'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <MavBar />
        <Main />
      </div>
    );
  }
}

export default App;