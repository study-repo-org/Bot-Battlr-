import React, { useEffect, useState } from "react";
import BotCard from "../components/BotCard";
import SortBar from "../components/SortBar";
import FilterBot from "../components/FilterBot";
import YourBotArmy from "./YourBotArmy";

function BotCollection() {
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



  // 2. Sort bots by their health, damage or armor
  const handleSort = (criteria) => {
    const sortedBots = [...filteredBots].sort((a, b) => a[criteria] - b[criteria]);
    setFilteredBots(sortedBots);
    setSortedBy(criteria);
  };
  const handleReset = () => {
    setFilteredBots(bots); 
    setSortedBy(null);
  };



  // 3. Filter bots by class
  const handleFilter = (selectedFilters) => {
    if (selectedFilters.length === 0) {
      setFilteredBots(bots); 
    } else {
      const filtered = bots.filter(bot => selectedFilters.includes(bot.bot_class));
      setFilteredBots(filtered);
    }
  };



  return (
    <div>
      <YourBotArmy/>
      <div>
          <SortBar handleSort={handleSort} handleReset={handleReset}/>
          <FilterBot handleFilter={handleFilter}/>
          
          <div className="column-grid">
              {filteredBots.map((bot) => (
                <BotCard key={bot.id} bot={bot}/>
              ))}
          </div>
      </div>
    </div>
  )
}

export default BotCollection;
