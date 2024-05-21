import React from 'react'
import './LoginRegister.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function RegisterPage() {
  return (
     <div className='wrapper'>
        <div className="form-box register">
    <form action=''>
        <h1>Registration</h1>
        <div className="input-box">
            <input type="text"
            placeholder='Username' required/>
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="email"
            placeholder='Email' required/>
            <FaEnvelope  className='icon'/>
        </div>
        <div className="input-box">
            <input type="password"
            placeholder='Password' required/>
            <FaLock className='icon' />
        </div>
        <div className='remember-forgot'>
            <label><input type='checkbox'/>I agree to the terms & conditions </label>
       
            
        </div>
        <button type="submit">Register</button>
        <div className="register-link"><p>Already Have an account?<a href="/App" > Login </a></p></div>
    </form>

</div>
</div>
  )
}

export default RegisterPage