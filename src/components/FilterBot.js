import React, { useState } from "react";

function FilterBot({ handleFilter }) {
  const filters = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (filter) => {
    const index = selectedFilters.indexOf(filter);
    if (index === -1) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    }
  };

  const applyFilters = () => {
    handleFilter(selectedFilters);
  };

  return (
    <div className="container">
      <p>Filter Bot By</p>
      <div>
        {filters.map((botClass) => (
          <div key={botClass}>
            <input
              type="checkbox"
              id={botClass}
              value={botClass}
              checked={selectedFilters.includes(botClass)}
              onChange={() => handleCheckboxChange(botClass)}
            />
            <label htmlFor={botClass}>{botClass}</label>
          </div>
        ))}
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default FilterBot;
