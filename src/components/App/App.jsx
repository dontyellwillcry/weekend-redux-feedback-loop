import React from 'react';
import axios from 'axios';
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
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Customer Info</Link></li>  
            <Link to="/checkout">Checkout</Link>
            <Link to="/admin"></Link>
          </ul>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/form">
            <CustomerForm />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          {/* <Route exact path="/admin">
            <Admin />
          </Route> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
