import React from 'react'
import'./index.css'
function Signup ()  {
  return (
    <div className='signup-container'>
        <form className='signup-form'>
            <h2>sign up</h2>
            <label htmlfor="email">
                Email:
                <input type="text"/>
            </label>
            <label htmlfor="password">
                Password:
                <input type="password"/>
            </label>
            <button>Sign Up</button>
            <p>Already register?<a>Login</a></p>
       </form>
    </div>
  )
}


export default Signup