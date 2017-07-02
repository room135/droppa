import React, { Component } from 'react';
import Content from './home_content/Content';
import NavMenu from './NavMenu'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <Content />
      </div>
    );
  }
}

export default App;
