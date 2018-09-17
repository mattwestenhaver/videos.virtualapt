import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import Videos from './components/videos/Videos.jsx'
import New from './components/videos/New.jsx'
import logo from './images/logo-vapt-small.png'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="logo-container">
            <Link to='/'><img src={logo} alt='virtualapt_logo' className='home-logo' /></Link>
          </div>
          <div>
            <h1>VirtualAPT's Digital Experiences</h1>
            <Route exact path='/' component={Videos} />
            <Route path='/new' component={New} />
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
