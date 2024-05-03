import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Outlet  } from 'react-router-dom';
import Bot from './Pages/Bot';
import BotDetails from './Pages/BotDetails';
import BotAmy from './components/BotAmy';

function App() {
  return (
    <div>
 
     <Navbar/>
     <Outlet/>
   
    </div>
  )
}

export default App