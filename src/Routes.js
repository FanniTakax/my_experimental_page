import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/teas' component={MainPage} />
        </Switch>
    );
}
 
export default Routes;
