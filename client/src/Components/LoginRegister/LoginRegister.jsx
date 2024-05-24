import React, { useContext, useState , useEffect } from 'react';
import { Navigate , useNavigate } from 'react-router-dom';
import axios from 'axios'
import './LoginRegister.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Context } from '../../App';


const LoginRegister = () => {

    const [Logemail, setLogemail] = useState('');
    const [Logpassword, setLogpassword] = useState('');
    const [Redirect, setRedirect] = useState(false);
    const [errors, seterrors] = useState({});
    const [Authenticated, setAuthenticated] = useContext(Context);
    const navigate = useNavigate();

    console.log("oncw 2")

    // useEffect(() => {
    //     try {
    //       axios.get('/login').then((data) => {
    //         alert(data)
    //         console.log(data)
    //         if(data.status === 200) {
    //           setAuthenticated(true)
    //           navigate('/home'); 
    //           console.log("this works ")
    //         }
    
              
              
    //       });
      
    //     } catch (error) {
    //       console.log("error occc"+ error)
    //     } 
    // },[]); 

    const successlogin = async (e) => {
        e.preventDefault();

        const validationErrors = {}
        if(!Logemail) {
            validationErrors.Logemail = "email is required"
        }  //else if(!/\S+@\S+\.\S+/.test(Logemail)){
        //     //\S+@\S+\.\S+
        //     validationErrors.Logemail = "email is invalied"
        // }

        if(!Logpassword) {
            validationErrors.Logpassword = "password is required"
        }else if(Logpassword.length < 4){
            validationErrors.Logpassword = "password should be at least 4 characters"
        }
        seterrors(validationErrors);

        if(Object.keys(validationErrors).length === 0){
            try {
                const res = await axios.post('/login', {Logemail, Logpassword})
                console.log("axios 1 passed" + res.status)
                alert("Loged from phase 1 successfully" + res.status)
                if(res.status === 200){
                    setRedirect(true);
                    setAuthenticated(true);
                    setLogemail('');
                setLogpassword('');
                }
                
            } catch (error) {
                alert("Login failed user name or password wrong")
                setLogemail('');
                setLogpassword('');
                console.log(error)
            }
        }
    }

    if(Redirect){
        return <Navigate to={'/home'} />
    }

    
   
  return (
    <div className='wrapper'>
        <div className="form-box login">
            <form action="" onSubmit={successlogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text"
                    placeholder='Username' value={Logemail} onChange={e => setLogemail(e.target.value)} required/>
                    {errors.Logemail && <span>{errors.Logemail}</span>}
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password"
                    placeholder='Password' value={Logpassword} onChange={e => setLogpassword(e.target.value)} required/>
                    {errors.Logpassword && <span>{errors.Logpassword}</span>}
                    <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox'/>Remember me</label>
                    <a href='#'>Forgot password?</a>
                </div>
                <button type="submit">Login</button>
    
                <div className="register-link"><p>Don't have an account? <a href="/register" > Register </a></p></div>
            </form>

        </div>
     
     
    </div>
  )
}

export default LoginRegister