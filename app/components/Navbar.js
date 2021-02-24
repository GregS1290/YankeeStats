import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Players'>Players</NavLink>
        <NavLink to='/Teamstats'>Team</NavLink>
        <NavLink to='/articles'>Articles</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
