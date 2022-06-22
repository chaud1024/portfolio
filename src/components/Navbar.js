import React from 'react'

import Logo from '../assets/images/logo.png';
import MenuIcon from '../assets/icon/menu.png';

const Navbar = () => {
  return (
    <nav className="nav_bar">
        <img src={Logo} alt="home" />

        <div className="nav_right">
          <div className="nav_right_lng">
            <select>
              <option value="KOR">KOR</option>
              <option value="ENG">ENG</option>
            </select>
          </div>
          <div className='nav_right_menu'>
            <img src={MenuIcon} alt="menu icon" />
            <ul className="wrap_menu">
              <li>Technomade</li>
              <li>Jadoo</li>
              <li>Portfolio</li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar