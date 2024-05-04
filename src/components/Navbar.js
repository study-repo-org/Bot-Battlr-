import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <p><Link to='/'>BATTLE ARMY</Link></p>
     
     <nav className='navbar-link'>
        <Link to='/'>Home</Link>
        <Link to='/yourBotArmy'>Your Bot Army</Link>
        <Link to='/addBot'>Add Bot</Link>
     </nav>
    </div>
  )
}

export default Navbar