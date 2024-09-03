import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink to="/character" className="active">Characters</NavLink>
      <NavLink to="/location" className="active">Locations</NavLink>
      <NavLink to="/episode" className="active">Episodes</NavLink>
    </nav>
  );
};

export default Navbar;
