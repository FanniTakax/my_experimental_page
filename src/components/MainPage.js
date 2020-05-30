import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

import Button from './Button';
import About from './MainPageComponents/About';
import Now from './MainPageComponents/Now';
import Cv from './MainPageComponents/Cv';
import Thoughts from './MainPageComponents/Thoughts';
import Movies from './MainPageComponents/Movies';


const MainPage = () => {
const history = useHistory();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="main-page">
        <h2 className='title-h title-main'>Thingies I do</h2>
        <nav className='nav-main'>
          <Link to="/main/ginger" className='nav-main-link'>ABOUT</Link>
          <Link to="/main/ginseng" className='nav-main-link'>NOW</Link>
          <Link to="/main/kombucha" className='nav-main-link'>CURRICULUM</Link>
          <Link to="/main/thoughts" className='nav-main-link'>TOUGHTS</Link>
          <Link to="/main/movies" className='nav-main-link'>MOVIES</Link>
        </nav>

        <Switch>
          <Route path="/main/ginger" render={(routerProps) => <About routerProps={routerProps}/>}></Route>
          <Route path="/main/ginseng" render={(routerProps) => <Now routerProps={routerProps}/>} ></Route>
          <Route path="/main/kombucha" render={(routerProps) => <Cv routerProps={routerProps}/>} ></Route>
          <Route path="/main/thoughts" render={(routerProps) => <Thoughts routerProps={routerProps}/>}  ></Route>
          <Route path="/main/movies" render={(routerProps) => <Movies routerProps={routerProps}/>}  ></Route>
        </Switch>
        
        <Button buttonName={'Back to the Landing Page'} onClick={() => history.push('/')} />
      </div>
    </Router>
  );
}

export default MainPage;