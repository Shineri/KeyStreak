import { Outlet } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup'
import Navbar from './Navbar';
import Login from './Login';
const Layout = ({ home, sethome }) => {

  function Home(){
    if (home == "login") 
     return (<Login sethome={sethome} />) 
    // return (<Login sethome={<Home/>} />) 
   if(home=="signup")
      return (<Signup sethome={sethome} />) 
  //  return (<Signup sethome={<Home/>} />) 
if(home=="nav")
    return (<Navbar />) 
  }
return (
  <>

    {Home()
    }
    <Outlet />
  </>
)
};

export default Layout;