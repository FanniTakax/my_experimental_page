import React, { useState, useEffect } from 'react';

import Button from './Button'
import TeasData from '../TeasData'
import MainDisplayText from './MainDisplayText'
import { teTexts } from './MainDisplayTextObj'

const MainPage = () => {
  const [state, setState] = useState([true, false, false, false, false, false])

  const handleClick = (index) => {
    let newState = state.map((element, i) => {
        if (i === index) {
          return true
        } else {
          return false
        }
      } 
    )
    setState(newState)
  }

  useEffect(() => {
    console.log(teTexts)
  }, [])

// main page navot kiszervezni kulon komponensbe
// routert hasznalni megjelenitesre
// megjelenitendoket kulon objectben tarolni

  return (
    <div className="main-page">
      <h2>Tea 101</h2>
      <Button buttonName={'What is Tea'} onClick={() => handleClick(0, state)} />
      <Button buttonName={'What is White Tea?'}  onClick={() => handleClick(1)} />
      <Button buttonName={'What is Green Tea?'}  onClick={() => handleClick(2)} />
      <Button buttonName={'What is Pu-erh Tea?'}  onClick={() => handleClick(3)} />
      <Button buttonName={'What is Oolong Tea?'}  onClick={() => handleClick(4)} />
      <Button buttonName={'What is Black Tea?'} onClick={() => handleClick(5)} />
      <MainDisplayText visibility={state} />
    </div>
  );
}

export default MainPage;