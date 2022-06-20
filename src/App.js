import React from 'react'

import './App.scss';
import Navbar from './components/Navbar'
import Main from './components/Main';
import Skill from './components/Skill';

const App = () => {
  return (
    <>
    <div className="wrap">
      <Navbar />
      <Main />
      <Skill />
    </div>
    </>
  )
}

export default App