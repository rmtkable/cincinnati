import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './styles/Home.css';
import Home from './pages/Home';
import Attractions from './pages/Attractions';
// import { Router } from 'express';

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/attractions' component={Attractions} />
    </Router>
    </div>
  );
}



export default App;
