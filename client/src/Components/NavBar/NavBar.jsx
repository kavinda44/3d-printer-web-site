
// import React, {useContext} from 'react'
// import './NavBar.css'
// import logo from './logo.PNG'
// import axios from 'axios'
// import { Context } from '../../App'
// import { Link, Navigate, useNavigate } from 'react-router-dom'

// const NavBar = () => {

//   const [Authenticated, setAuthenticated] = useContext(Context);
//   const navigate = useNavigate();

//   const singout = async (e) => {
//     e.preventDefault();
//     const ress = await axios.post('/logout');
//     if(ress.status === 200){
//       setAuthenticated(false)
//       navigate('/');
//     }
//   }
//   return (
//     <nav className='maincontainer'>
//         <img src={logo} alt="" className='logo'/>
//         <ul>
//             <li className='hm'><Link to={'/home'}>Home</Link></li>
//             <li className='hm'><Link to={'/store'}>Store</Link></li>
//             <li className='au'><Link to={'/about'}>About us</Link></li>
//             <li className='cu'><Link to={'/contact'}>Contact us</Link></li>
//             <li><button className='btn' onClick={singout}>Sign Out</button></li>
//         </ul>
//     </nav>
//   )
// }

// export default NavBar

import React, { useContext, useState, useEffect } from 'react';
import './NavBar.css';
import logo from './logo.PNG';
import axios from 'axios';
import { Context } from '../../App';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [, setAuthenticated] = useContext(Context); 
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const signout = async (e) => {
    e.preventDefault();
    const ress = await axios.post('/logout');
    if (ress.status === 200) {
      setAuthenticated(false);
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]); 

  return (
    <nav className={`maincontainer ${visible ? 'visible' : 'hidden'}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li className='hm'><Link to={'/home'}>Home</Link></li>
        <li className='hm'><Link to={'/store'}>Store</Link></li>
        <li className='au'><Link to={'/about'}>About us</Link></li>
        <li className='cu'><Link to={'/contact'}>Contact us</Link></li>
        <li><button className='btn' onClick={signout}>Sign Out</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;