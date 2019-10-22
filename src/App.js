import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import History from './History';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/our-history" exact component={History} />
        </Switch>
      </div>
    </Router>



  );
}

export default App;
