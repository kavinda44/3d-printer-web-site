import React from 'react'
import './NavBar.css'
import logo from './logo.PNG'

const NavBar = () => {
  return (
    <nav className='maincontainer'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li><button className='btn'>Sign Out</button></li>
            
            
        </ul>
    </nav>
  )
}

export default NavBar