import React from 'react'
import { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Header from './Conponent/Header'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call, validation, etc.)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form after submission
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
  <Header/>
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h3>SIGN UP</h3>
        <label id='Label'>
          Name:
          <input id='Input'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
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
        <button id='btn' disabled={!name} type="submit" >Sign Up</button>
      </form>
      <h6>Already a user ? <Link to={'/Login'} style={{ textDecoration: 'none' }}>
        Login here</Link> </h6>
    </div>
    </div>
  );
};

export default Signup;