import React from 'react'
import './Navbar.css'
import logo from '../../assets/snehal.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        {/* <img src={logo} alt="logo" height="100px" /> */}
        <h1 className='logo'>Snehal</h1>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>My Projects</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </nav>
  )
}

export default Navbar