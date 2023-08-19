import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import CommentsInput from '../CommentsInput/CommentsInput';
import SupportInput from '../SupportInput/SupportInput';
import UnderstandingInput from '../UnderstandingInput/UnderstandingInput';
import FeelingInput from '../FeelingInput/FeelingInput';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <div>
          {/* <ul className="nav">
            <li><Link to="/">Feelings</Link></li>
            <li><Link to="/understanding">Understanding</Link></li>  
            <li><Link to="/supported">Supported</Link></li>
            <li><Link to="/comments">Comments</Link></li>
          </ul> */}
          
          <Route exact path="/">
            <FeelingInput />
          </Route>
          <Route exact path="/understanding">
            <UnderstandingInput />
          </Route>
          <Route exact path="/supported">
            <SupportInput />
          </Route>
          <Route exact path="/comments">
            <CommentsInput />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
