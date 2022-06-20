import React from 'react'

import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="nav_bar wrap">
        <img src={Logo} alt="home" />
    </nav>
  )
}

export default Navbar