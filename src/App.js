import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">SignIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    </div>
  );
}

export default App;
