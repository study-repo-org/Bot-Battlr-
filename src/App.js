import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BotCollection from './Pages/BotCollection';
import BotSpecs from './Pages/BotSpecs';
import YourBotArmy from './Pages/YourBotArmy';
import AddBot from './Pages/AddBot';

function App() {
  const [bots, setBots] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);
  const [filteredBots, setFilteredBots] = useState([]);



  //1. See profiles of all bots rendered in BotCollection
  const getBots = async () => {
    try {
      const response = await fetch("https://wk2-cc.onrender.com/bots");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBots(data);
      setFilteredBots(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBots();
  }, []);


  
  //2. creating bots
    const handlePost = async (data) => {    
      try {
        const response = await fetch("https://wk2-cc.onrender.com/bots", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Failed to create Account');
        }
        getBots()
      } catch (error) {
        console.error('Error adding transaction:', error);
      }
    };



  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={
        <BotCollection 
        bots={bots}
        setSortedBy={setSortedBy}
        filteredBots={filteredBots}
        setFilteredBots={setFilteredBots}
        />} />
      <Route path='/bots/:id' element={<BotSpecs getBots={getBots}/>} />
      <Route path='/yourBotArmy' element={<YourBotArmy/>} />
      <Route path='/addBot' element={<AddBot handlePost={handlePost} />} />
     </Routes>
    </div>
  )
}

export default App