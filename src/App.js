import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import Videos from './components/videos/Videos.jsx'
import New from './components/videos/New.jsx'
import Edit from './components/videos/Edit.jsx'
import logo from './images/logo-vapt-small.png'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1 className='app-header'>VirtualAPT's Digital Experiences</h1>
            <Route exact path='/home' component={Videos} />
            <Route path='/home/new' component={New} />
            <Route path='/home/edit' component={Edit} />
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
