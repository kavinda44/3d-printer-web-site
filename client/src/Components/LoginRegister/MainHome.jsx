import React, {useContext, useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Home from '../Pages/HomePage/Home'
import About from '../Pages/AboutPage/About'
import axios from "axios";
import { Context } from '../../App'
import { Navigate, useNavigate } from 'react-router-dom'

function MainHome() {
//   const [user, setUser] = useState(null);
//   const [Authenticated, setAuthenticated] = useContext(Context);
//   const navigate = useNavigate();

//   useEffect((e) => {
//     e.preventDefault();
//     try {
//       axios.get('/login').then((data) => {
//         alert(data.status)
//         if(data.status === 200) {
//           setAuthenticated(true)
//           navigate('/home'); 
//           console.log("this works ")
//         }

          
          
//       });
  
//     } catch (error) {
//       console.log("error occc"+ error)
//     } 
// });   
  return (
    <>
    <NavBar/>
    <Hero/>
    <Home/>
    <About/>
    </>
  )
}

export default MainHome