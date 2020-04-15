import React, { useState, useEffect } from 'react';

import Button from './Button'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>You are on my experimental page!</h1>
      <Button buttonName={'Check it out!'} />
    </div>
  );
}

export default LandingPage;
