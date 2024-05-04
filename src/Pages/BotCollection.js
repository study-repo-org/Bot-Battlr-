import React, { useEffect, useState } from "react";
import BotCard from "../components/BotCard";
import SortBar from "../components/SortBar";
import FilterBot from "../components/FilterBot";
import YourBotArmy from "./YourBotArmy";

function BotCollection({bots, setSortedBy, filteredBots, setFilteredBots}) {


  // 3. Sort bots by their health, damage or armor
  const handleSort = (criteria) => {
    const sortedBots = [...filteredBots].sort((a, b) => a[criteria] - b[criteria]);
    setFilteredBots(sortedBots);
    setSortedBy(criteria);
  };
  
  const handleReset = () => {
    setFilteredBots(bots); 
    setSortedBy(null);
  };



  // 4. Filter bots by class
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
