import React from 'react';
import './index.css'; // Import your CSS file for login styling
import { Link, useNavigate } from 'react-router-dom'
 



const Login = ({sethome}) => {
  const navigate=useNavigate(); 
  function handle(e){
    e.preventDefault();
    sethome("nav");
    navigate('/')
  }

  function handlelSignup(e){
    e.preventDefault();
    sethome("signup");
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handle}>
        <h2>Login</h2>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        
        <div className="form-group">
         <button type="submit">Login</button>
        </div>
        <p onClick={handlelSignup}>Already register? Signup</p>
        
      </form>
    </div>
  );
};

export default Login;
