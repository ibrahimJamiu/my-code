import React from 'react'
import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Header from './Conponent/Header'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call, validation, etc.)
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form after submission
    setEmail('');
    setPassword('');
  };
 

  return (
    <div>
<Header/>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h3>WELCOME BACK!</h3>
        <p >Please enter your login details</p>
        <label id='Label'>
          Email:
          <input id='Input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label id='Label'>
          Password:
          <input id='Input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className='row'>
          <div className='col-6'>
            <label >
              <input type="checkbox" /> 
                Remember me</label>
          </div>
          <div className='col-6'>

            <Link to={'/'} style={{
              textDecoration
                : 'none'
            }}>Forgot Password</Link>
          </div>
        </div>

        <button disabled={!email} type="submit" onClick={e => Login()}>Login</button>
      </form>
      <h6>Not Registered ? <Link to={'/Signup'} style={{textDecoration:'none'}}>
        Signup here</Link> </h6>
    </div>
    </div>
  );
};

export default Login;
