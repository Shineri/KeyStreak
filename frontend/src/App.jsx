import React, { useState } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';

import {BrowserRouter,Routes,Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import TestForm from './Component/Test';
import Layout from './Layout';
import Practice from './Practice';
import Home from './Home';

function App() {
   const [home,sethome]= useState("signup")
      const router=createBrowserRouter(
  createRoutesFromElements(

     <Route path='/'element={<Layout home={home} sethome={sethome}/>}>
      
      <Route path = 'test/' element={<TestForm/>}/>
      <Route path = 'Signup/' element={<Signup/>}/>
      <Route path = 'Practice/' element={<Practice/>}/>
      {/* <Route path='Login/'element={<Login sethome={sethome}/>}/> */}
      <Route path='Login/'element={<Login sethome={<Home/>}/>}/>
     </Route>
  )
     )
  return (
     <RouterProvider router={router}/>
     
  
  );
}


export default App;