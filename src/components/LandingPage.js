import React from 'react';
import { Link, useHistory } from "react-router-dom";

import Button from './Button'

const LandingPage = () => {
  const history = useHistory();

  return (
    <div className="landing-page">
      <h1 className="title-h">You are on my experimental page!</h1>
      <Button buttonName={'Check it out!'} onClick={() => history.push('/main')} />
    </div>
  );
}

export default LandingPage;
