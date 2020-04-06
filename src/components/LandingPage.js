import React, { useState, useEffect } from 'react';

import Button from './Button'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Delicious Delights</h1>
      <Button buttonName={'Check \'em out!'} />
    </div>
  );
}

export default LandingPage;
