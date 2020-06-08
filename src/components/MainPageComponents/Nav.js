import React from 'react'
import { Route, Link, Switch } from "react-router-dom";

import About from './About';
import Now from './Now';
import Cv from './Cv';
import Thoughts from './Thoughts';
import Movies from './Movies';

const Nav = () => {
    return (
        <>
            <nav className='nav-main'>
                <Link to="/main/about" className='nav-main-link'>ABOUT</Link>
                <Link to="/main/now" className='nav-main-link'>NOW</Link>
                <Link to="/main/curriculum" className='nav-main-link'>CURRICULUM</Link>
                <Link to="/main/thoughts" className='nav-main-link'>TOUGHTS</Link>
                <Link to="/main/movies" className='nav-main-link'>MOVIES</Link>
            </nav>
            <Switch>
                <Route path="/main/about" render={(routerProps) => <About routerProps={routerProps}/>}></Route>
                <Route path="/main/now" render={(routerProps) => <Now routerProps={routerProps}/>} ></Route>
                <Route path="/main/curriculum" render={(routerProps) => <Cv routerProps={routerProps}/>} ></Route>
                <Route path="/main/thoughts" render={(routerProps) => <Thoughts routerProps={routerProps}/>}  ></Route>
                <Route path="/main/movies" render={(routerProps) => <Movies routerProps={routerProps}/>}  ></Route>
            </Switch>
        </>
    )
}

export default Nav