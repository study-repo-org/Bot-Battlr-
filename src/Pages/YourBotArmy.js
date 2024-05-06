import React, { useEffect, useState } from 'react'
import { FaHeartPulse ,FaBoltLightning} from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

function YourBotArmy() {
  const [botArmy, setBotArmy] = useState([]);


// 9. elected bot should render in the YourBotArmy
  const getBotArmy = async () => {
    try {
      const response = await fetch("https://wk2-cc.onrender.com/yourArmy");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBotArmy(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBotArmy();
  }, []);



  //10. Release a bot from my army by clicking on it.
  const releaseBot = async (botId) => {
    try {
      const deleteArmy = await fetch(`https://wk2-cc.onrender.com/yourArmy/${botId}`, {
        method: 'DELETE',
      });
     
      if (!deleteArmy.ok) {
        throw new Error("Failed to delete bot from backend");
      }
      setBotArmy((prevBotArmy) => prevBotArmy.filter((bot) => bot.id !== botId));
      alert('Bot removed from Your Bot Army successfully')
    } catch (error) {
      console.error('Error releasing bot:', error);
    }
  };



  return (
    <div className='amy-container'>
        <div className='amy-container'>
            <div className="column-grid">
              {botArmy.map((army) => (
                  <div key={army.id} className="bot-army">
                      <div onClick={() => releaseBot(army.id)} className="">
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



export default YourBotArmy
