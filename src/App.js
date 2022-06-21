import React from 'react'

import './App.scss';
import Navbar from './components/Navbar'
import Main from './components/Main';
import Skill from './components/Skill';
import Achiev from './components/Achiev';

const App = () => {
  return (
    <>
    <div className="wrap">
      <Navbar />
      <Main />
      <Skill />
      <Achiev />
    </div>
    </>
  )
}

export default App