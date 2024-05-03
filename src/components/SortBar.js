import React from 'react'

function SortBar() {
  return (
    <div className="container">
   <p>Sort Bot By</p>
    <div className='button-container'> 
      <button>All</button>
      <button>Health</button>
      <button>Damage</button>
      <button>Armor</button>
    </div>
   </div>
  )
}

export default SortBar