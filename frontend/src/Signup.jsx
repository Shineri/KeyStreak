import React,{ useState} from 'react'
import'./index.css'
import { Link, useNavigate } from 'react-router-dom'
function Signup ({sethome})  {

  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const [username,setUsername]=useState('')
const navigate=useNavigate();
  function handle(e){
    e.preventDefault();
    sethome("nav");
  }
  function handlelogin(e){
    e.preventDefault();
    sethome("login");
  }
  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handle} >
            <h2>sign up</h2>
            <label htmlfor ="username">
                Username: </label>
                <input type=" username" onchange ={(e)=> setUsername(e.target.values)}/>
            
            <label htmlfor="email">
                Email : </label>
                <input type="text" onchange ={(e)=> setEmail(e.target.values)}/>
            
            <label htmlfor="password">
                Password: </label>
                <input type="password" onchange ={(e)=> setpassword(e.target.values)}/>
            <div ><button type="submit">Sign Up</button> <br/> </div>
            
            <p onClick={handlelogin}>Already register?ogin</p>
       </form>
    </div>
  )
}


export default Signup