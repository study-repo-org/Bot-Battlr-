import React from 'react'
import { FaHeartPulse ,FaBoltLightning} from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


function BotCard({bot}) {
  return (
    <div>
        <div className="column-grid">
          <Link to={`bots/${bot.id}`}>
            <div className="bot-army">
                  <div key={bot.id} className="">
                          <div className="image-container">
                            <img className='image' alt="" src={bot.avatar_url}  />
                          </div>
                            <div className="item-container">
                                <h3>{bot.name}</h3>
                                <small>{bot.catchphrase}</small>
                            </div>
                          <div className="extra-info">
                            <span> <FaHeartPulse/>{bot.health}</span>
                            <span><FaBoltLightning />{bot.damage}</span>
                            <span> <FaShieldAlt />{bot.armor}</span>
                          </div>
                  </div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default BotCard