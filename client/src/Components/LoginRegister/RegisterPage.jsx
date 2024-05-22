import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import './LoginRegister.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function RegisterPage() {

    const [Usern, setUsern] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Check, setCheck] = useState(false);
    const [relogindirrect, setrelogindirrect] = useState(false);
    const [errors, seterrors] = useState({});

    const register = async (e) => {
        e.preventDefault();

        const validationErrors = {}
        if(!Usern) {
            validationErrors.Usern = "username is required"
        }

        if(!Email) {
            validationErrors.Email = "email is required"
        }

        if(!Password) {
            validationErrors.Password = "password is required"
        }else if(Password.length < 4){
            validationErrors.Password = "password should be at least 4 characters"
        }

        // if(!Check){
        //     validationErrors.Check = "Must agree to the terms & conditions"
        // }

        console.log("works validation")

        seterrors(validationErrors);

        console.log(validationErrors)

        if(Object.keys(validationErrors).length === 0){
            try {
                await axios.post('/register', {Usern, Email, Password})
                alert("Signed in successfully")
                setrelogindirrect(true)
            } catch (error) {
                alert("Sign in failed "+error)
            }
        }
        // try {
        //     await axios.post('/register', {Usern, Email, Password})
        //     alert("Signed in successfully")
        //     setrelogindirrect(true)
        // } catch (error) {
        //     alert("Sign in failed "+error)
        // }
    }

    if(relogindirrect) {
        return <Navigate to={'/'} />
    }


  return (
     <div className='wrapper'>
        <div className="form-box register">
    <form action="" onSubmit={register}>
        <h1>Registration</h1>
        <div className="input-box">
            <input type="text"
            placeholder='Username' value={Usern} onChange={e => setUsern(e.target.value)} required/>
            <FaUser className='icon'/>
            {errors.Usern && <span>{errors.Usern}</span>}
        </div>
        <div className="input-box">
            <input type="email"
            placeholder='Email' value={Email} onChange={e => setEmail(e.target.value)} required/>
            {/* {errors.Email && <span>{errors.Email}</span>} */}
            <FaEnvelope  className='icon'/>
        </div>
        <div className="input-box">
            <input type="password"
            placeholder='Password' value={Password} onChange={e => setPassword(e.target.value)} required/>
            {errors.Password && <span>{errors.Password}</span>}
            <FaLock className='icon' />
        </div>
        <div className='remember-forgot'>
            <label><input type='checkbox' value={Check} onChange={e => setCheck(e.target.value)}/>I agree to the terms & conditions </label>
            {/* {errors.Check && <span>{errors.Check}</span>} */}
        </div>
        <button type='submit'>Register</button>
        <div className="register-link"><p>Already Have an account?<a href="/" > Login </a></p></div>
    </form>
    
    </div>
</div>
  )
}

export default RegisterPage