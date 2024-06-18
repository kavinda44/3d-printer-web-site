import React, {useContext, useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Home from '../Pages/HomePage/Home'
import About from '../Pages/AboutPage/About'
import axios from "axios";
import { Context } from '../../App'
import { Navigate, useNavigate } from 'react-router-dom'

function MainHome() {
  const [user, setUser] = useState(null);
  const [Authenticated, setAuthenticated] = useContext(Context);
  const navigate = useNavigate();

//   useEffect(() => {
//     try {
//       axios.get('/').then((data) => {
//         // alert(data.data)
//         // console.log(data.data)
//         // if(data.status === 200) {
//         //   setAuthenticated(true)
//         //   navigate('/home'); 
//         //   console.log("this works ")
//         // }
//         if(data.data){
//           setAuthenticated(true)
//           navigate('/home'); 
//           console.log("setting auth main")
//         }
          
          
//       });
  
//     } catch (error) {
//       console.log("error occc"+ error)
//     } 
// },[]); 
  
// const clikc = () => {
//   axios.get('/').then((data) => {
//     // alert(data.data)
//     // console.log(data.data)
//     // if(data.status === 200) {
//     //   setAuthenticated(true)
//     //   navigate('/home'); 
//     //   console.log("this works ")
//     // }
//     if(data.data){
//       setAuthenticated(true)
//       navigate('/home'); 
//       console.log("setting auth2 " + data.data)
//     }
      
      
//   });
// }

    
console.log("once")
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