import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FaHeartPulse ,FaBoltLightning} from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

function BotAmy(props) {
  const [botArmy, setBotArmy] = useState([]);


  const getBotArmy = async () => {
    try {
      const response = await fetch("https://wk2-cc.onrender.com/yourArmy");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBotArmy(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBotArmy();
  }, []);


  return (
    <div className='amy-container'>
        <div className='amy-container'>
            <div className="column-grid">
              {botArmy.map((army) => (
                  <div className="bot-army">
                      <div className="">
                          <div className="image-container">
                                <img className='image' alt="" src={army.avatar_url}  />
                            </div>
                             <div className="item-container">
                                <h3>{army.name}</h3>
                                <small>{army.catchphrase}</small>
                             </div>
                             <div className="extra-info">
                                <span> <FaHeartPulse/>{army.health}</span>
                                <span><FaBoltLightning />{army.damage}</span>
                                <span> <FaShieldAlt />{army.armor}</span>
                            </div>
                        </div>
                 </div>
              ))}
            </div>
        </div>
    </div>
  )
}

BotAmy.propTypes = {}

export default BotAmy
