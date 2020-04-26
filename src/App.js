import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './components/LandingPage'
import MainPage from './components/MainPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <LandingPage />
        </Route>
        <Route path='/main'>
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
