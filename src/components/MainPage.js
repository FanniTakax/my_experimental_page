import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

import Button from './Button';
import Ginger from './MainPageComponents/Ginger';
import Ginseng from './MainPageComponents/Ginseng';
import Kombucha from './MainPageComponents/Kombucha';
import Kapalabhati from './MainPageComponents/Kapalabhati';


const MainPage = () => {
const history = useHistory();

  return (
    <Router>
      <div className="main-page">
        <h2 className='title-h'>Thingies I do to increase fire, to help my digestive system</h2>
        <nav className='nav-main'>
          <Link to="/main/ginger" className='nav-main-link'>Ginger</Link>
          <Link to="/main/ginseng" className='nav-main-link'>Ginseng</Link>
          <Link to="/main/kombucha" className='nav-main-link'>Kombucha</Link>
          <Link to="/main/kapalabhati" className='nav-main-link'>Kapalabhati</Link>
        </nav>

        <Switch>
          <Route path="/main/ginger">
            <Ginger />
          </Route>
          <Route path="/main/ginseng">
            <Ginseng />
          </Route>
          <Route path="/main/kombucha">
            <Kombucha />
          </Route>
          <Route path="/main/kapalabhati">
            <Kapalabhati />
          </Route>
        </Switch>
        
        <Button buttonName={'Back to the Landing Page'} onClick={() => history.push('/home')} />
      </div>
    </Router>
  );
}

export default MainPage;