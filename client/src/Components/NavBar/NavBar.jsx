import React, {useContext} from 'react'
import './NavBar.css'
import logo from './logo.PNG'
import axios from 'axios'
import { Context } from '../../App'
import { Navigate, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const [Authenticated, setAuthenticated] = useContext(Context);
  const navigate = useNavigate();

  const singout = async (e) => {
    e.preventDefault();
    const ress = await axios.post('/logout');
    if(ress.status === 200){
      setAuthenticated(false)
      navigate('/'); 
    }
  }
  return (
    <nav className='maincontainer'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li><button className='btn' onClick={singout}>Sign Out</button></li>
            
            
        </ul>
    </nav>
  )
}

export default NavBar