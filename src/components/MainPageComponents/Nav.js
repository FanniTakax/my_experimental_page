import React, { useState } from 'react'
import { Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components';

import About from './About';
import Now from './Now';
import Cv from './Cv';
import Thoughts from './Thoughts';
import Movies from './Movies';

const Burgernav = styled.div`
    max-width: 14rem;
    position: relative;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 99%;

    nav {
        display: none;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
    }

    @media only screen and (max-width: 600px) {
        nav {
            display: ${({ open }) => open ? 'flex' : 'none'};
        }
        div {
            width: 2rem;
            height: 0.25rem;
            background-color: rgba(49, 54, 42, 0.8);
            border-radius: 10px;
            margin: 0.2rem;
        }
    }
`;

const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className='nav-main'>
                <Link to="/main/about" className='nav-main-link'>ABOUT</Link>
                <Link to="/main/now" className='nav-main-link'>NOW</Link>
                <Link to="/main/curriculum" className='nav-main-link'>CURRICULUM</Link>
                <Link to="/main/thoughts" className='nav-main-link'>TOUGHTS</Link>
                <Link to="/main/movies" className='nav-main-link'>MOVIES</Link>
            </nav>
            <Burgernav open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
                <nav className='nav-main-burger'>
                    <Link to="/main/about" className='nav-main-link'>ABOUT</Link>
                    <Link to="/main/now" className='nav-main-link'>NOW</Link>
                    <Link to="/main/curriculum" className='nav-main-link'>CURRICULUM</Link>
                    <Link to="/main/thoughts" className='nav-main-link'>TOUGHTS</Link>
                    <Link to="/main/movies" className='nav-main-link'>MOVIES</Link>
                </nav>
            </Burgernav>
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