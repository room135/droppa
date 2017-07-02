import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import NavMenu from './NavMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
      </div>
    );
  }
}

export default App;
