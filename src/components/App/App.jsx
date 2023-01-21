import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Success from '../Success/Success';
function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
          
          <Route exact path ="/">
            <Feeling/>
          </Route>
          
          <Route exact path ="/review">
            <Review/>
          </Route>

          <Route exact path ="/success">
            <Success/>
          </Route>

      </Router>
    </div>
  );
}

export default App;
