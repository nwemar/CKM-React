import React from 'react'
import '../style/navbar.scss'
import { NavLink } from 'react-router-dom'
// import Home from './home'
// import About from './About';

const navbar = (props) => {
  const { handleLogout } = props;
  return (
    <div className='nav'>
      <div className='nav-header'>
        <img src='./images/logo.png' alt='CKM' />&nbsp;&nbsp;&nbsp;<span></span>
      </div>
      <div className='nav-links'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/About" >About</NavLink>
        <NavLink to="/Inquery" >Inquery</NavLink>
        <NavLink to="/Logout" onClick={handleLogout}>Logout</NavLink>
      </div>
    </div >
  )
}

export default navbar;