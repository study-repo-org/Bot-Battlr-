import React from 'react'

function SortBar({ handleSort, handleReset }) {
  return (
    <div className="container">
   <p>Sort Bot By</p>
    <div className='button-container'> 
      <button onClick={handleReset}>All</button>
      <button onClick={() => handleSort("health")}>Health</button>
      <button onClick={() => handleSort("damage")}>Damage</button>
      <button onClick={() => handleSort("armor")}>Armor</button>
    </div>
   </div>
  )
}

export default SortBar