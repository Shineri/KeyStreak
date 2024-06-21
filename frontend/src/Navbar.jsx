// Navbar.js
import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
 import logo from './logo.jpg'; // Adjust the path as per your project structure
  import './Component/Navbar.css'
function Navbar(){
    const [dropdownOpen,setDropdownOpen]= useState(false);
     const toggleDropdown=()=>{
        setDropdownOpen(!dropdownOpen);
     
     };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to ="/">Home</Link></li>
        <li><Link to="/practice">Practice</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/Signup">Signup</Link></li>

        <li className="profile_dropdown" onClick={toggleDropdown}>
            Profile{dropdownOpen && (<ul classNmae="dropdownmenu">
                <li><Link to ="/Edit-Profile">Edit-Profile</Link></li>
                <li><Link to="/your-points">Your Points</Link></li>
              
              <li><Link to="/total-test">Total Test</Link></li>
              <li><Link to="/Logout">Logout</Link></li>
            </ul>
            )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
