import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './components/LandingPage'
import MainPage from './components/MainPage'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' exact render={(routerProps) => <LandingPage routerProps={routerProps}/>}></Route>
        <Route path='/main' render={(routerProps) => <MainPage routerProps={routerProps}/>}></Route>
        <Route component={LandingPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
