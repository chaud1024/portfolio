import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home';

import './components/scss/initial.scss';
import Technomade from './pages/Technomade';
import TechnomadeAdmin from './pages/TechnomadeAdmin';
import Jadoo from './pages/Jadoo';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <>
    <div className="wrap">
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/technomade-service" element={<Technomade/>} />
            <Route path="/technomade-admin" element={<TechnomadeAdmin/>} />
            <Route path="/jadoo" element={<Jadoo/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
          </Routes>
        </div>
    </div>
    </>
  )
}

export default App