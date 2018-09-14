import React, { Component } from 'react';
import './App.css';

import Home from './components/Home.jsx'
import logo from './images/logo-vapt-small.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo-container">
          <img src={logo} alt='virtualapt_logo' className='home-logo' />
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
