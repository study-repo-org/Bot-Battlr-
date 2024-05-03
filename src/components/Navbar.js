import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <p><Link to='/'>BATTLE ARMY</Link></p>
     
     <nav className='navbar-link'>
       <Link to='/'>Home</Link>
        <Link to='/botArmy'>Your Bot Army</Link>
     </nav>
    </div>
  )
}

export default Navbar