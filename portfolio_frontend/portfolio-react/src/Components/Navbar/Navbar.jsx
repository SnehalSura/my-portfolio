import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <nav className='navbar'>

        <h1 className='logo'>Snehal</h1>
        {/* Bars Icon */}
        <FontAwesomeIcon icon={faBars} size="2x" className='nav-mob-open' onClick={openMenu}/>
        <ul className="nav-menu" ref={menuRef}>
            {/* Close Icon */}
            <FontAwesomeIcon icon={faTimes} size="2x" className='nav-mob-close' onClick={closeMenu}/>
            <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink> </li>
            <li><AnchorLink className='anchor-link' href='#about'>About Me</AnchorLink></li>
            <li><AnchorLink className='anchor-link' href='#projects'>Projects</AnchorLink></li>
            <li><AnchorLink className='anchor-link' href='#'>Experience</AnchorLink></li>
            <li><AnchorLink className='anchor-link' href='#contact'>Contact</AnchorLink></li>
        </ul>
        
        <div className="nav-connect"><AnchorLink className='anchor-link' href='#contact'>Connect With Me</AnchorLink></div>
    </nav>
  )
}

export default Navbar