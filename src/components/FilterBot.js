import React from "react";

function FilterBot() {
  return (
    <div className="container">
      <p>Filter Bot By</p>
      <div>
        <select>
          <option>Support</option>
          <option>Medic</option>
          <option>Assault</option>
          <option>Defender</option>
          <option>Captain</option>
          <option>Witch</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBot;
