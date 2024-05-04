import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BotCollection from './Pages/BotCollection';
import BotSpecs from './Pages/BotSpecs';
import YourBotArmy from './Pages/YourBotArmy';
import AddBot from './Pages/AddBot';

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<BotCollection/>} />
      <Route path='/bots/:id' element={<BotSpecs/>} />
      <Route path='/yourBotArmy' element={<YourBotArmy/>} />
      <Route path='/addBot' element={<AddBot/>} />
     </Routes>
    </div>
  )
}

export default App