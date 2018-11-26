import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code>  criação Adrian.
          </p>
   
          <ul>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/usuario">Usuário</NavLink></li>
            <li><NavLink to="/grupo">Grupo</NavLink></li>
          </ul>

        </header>
      </div>
    );
  }
}

export default App;
