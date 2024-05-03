import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bot from './Pages/Bot';
import BotDetails from './Pages/BotDetails';
import BotAmy from './components/BotAmy';

function App() {
  return (
    <div>
     <Navbar/>
      <Route path='/' element={<Bot/>} />
      <Route path='/botDetails/:id' element={<BotDetails/>} />
      <Route path='/botArmy' element={<BotAmy/>} />
    </div>
  )
}

export default App