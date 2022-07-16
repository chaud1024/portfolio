import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import Logo from '../assets/images/logo.png';
import MenuIcon from '../assets/icon/menu.png';

import './scss/nav_bar.scss'

const Navbar = () => {
  return (
    <nav className="nav_bar">
        <Link to="/">
          <img src={Logo} alt="home" />
        </Link>

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
              <CustomLink to="/technomade-service">Technomade: Service pages</CustomLink>
              <CustomLink to="/technomade-admin">Technomade: Admin</CustomLink>
              <CustomLink to="/jadoo">Jadoo</CustomLink>
              <CustomLink to="/portfolio">Portfolio</CustomLink>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

