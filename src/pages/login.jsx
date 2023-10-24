import React from 'react'
import './CSS/LoginSignup.css'
const Login = () => {
  return (
    <div className='login'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password'/>
        </div>
        <button>continue</button>
        <p className="login-login">
          already have an account? <span>login</span>
        </p>
        <div className=' login-agree'>
          <input type='checkbox'  name='' id=''/>
          <p>by continuing , i agree to the terms of use &privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login
