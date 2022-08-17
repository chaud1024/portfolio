import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import Logo from "../assets/images/logo.png";

import "./scss/nav_bar.scss";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const Navbar = () => {
  return (
    <nav className="nav_bar">
      <div className="wrap_nav">
        <Link to="/">
          <img src={Logo} alt="home" />
        </Link>

        <ul className="wrap_menu">
          <CustomLink to="/technomade-service">
            Technomade: Service pages
          </CustomLink>
          <CustomLink to="/technomade-admin">Technomade: Admin</CustomLink>
          <CustomLink to="/jadoo">Jadoo</CustomLink>
          <CustomLink to="/portfolio">Busan Beach Weather</CustomLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
