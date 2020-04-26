import React from 'react';
import { Link } from "react-router-dom";

import Button from './Button'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="title-h">You are on my experimental page!</h1>
      <Link to='/main'><Button buttonName={'Check it out!'} /></Link>
    </div>
  );
}

export default LandingPage;

/*
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  return <button onClick={() => history.push('/profile')}>Profile</button>;
}
*/
