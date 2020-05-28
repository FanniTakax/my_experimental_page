import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

import Button from './Button';
import Ginger from './MainPageComponents/Ginger';
import Ginseng from './MainPageComponents/Ginseng';
import Kombucha from './MainPageComponents/Kombucha';
import Thoughts from './MainPageComponents/Thoughts';


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
        </nav>

        <Switch>
          <Route path="/main/ginger" render={(routerProps) => <Ginger routerProps={routerProps}/>}></Route>
          <Route path="/main/ginseng" render={(routerProps) => <Ginseng routerProps={routerProps}/>} ></Route>
          <Route path="/main/kombucha" render={(routerProps) => <Kombucha routerProps={routerProps}/>} ></Route>
          <Route path="/main/thoughts" render={(routerProps) => <Thoughts routerProps={routerProps}/>}  ></Route>
        </Switch>
        
        <Button buttonName={'Back to the Landing Page'} onClick={() => history.push('/')} />
      </div>
    </Router>
  );
}

export default MainPage;