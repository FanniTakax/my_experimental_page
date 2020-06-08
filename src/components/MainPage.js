import React from 'react';
import { BrowserRouter as Router, useHistory } from "react-router-dom";

import Button from './Button';
import Nav from './MainPageComponents/Nav'


const MainPage = () => {
const history = useHistory();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="main-page">
        <h2 className='title-h title-main'>Fanni's Page</h2>
        <Nav />
        <Button buttonName={'Back to the Landing Page'} onClick={() => history.push('/')} />
      </div>
    </Router>
  );
}

export default MainPage;