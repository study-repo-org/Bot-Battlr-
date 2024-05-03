import React, { useEffect, useState } from "react";
import BotAmy from '../components/BotAmy';
import BotCard from "../components/BotCard";
import SortBar from "../components/SortBar";
import FilterBot from "../components/FilterBot";


function Bot() {
  const [bots, setBots] = useState([]);


  const getBots = async () => {
    try {
      const response = await fetch("https://wk2-cc.onrender.com/bots");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBots(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBots();
  }, []);

  


  return (
    <div>
      <BotAmy/>

        <>
          <SortBar/>
          <FilterBot/>
          
          <div className="column-grid">
              {bots.map((bot) => (
                <BotCard key={bot.id} bot={bot}/>
              ))}
          </div>
        </>
    </div>
  )
}

export default Bot