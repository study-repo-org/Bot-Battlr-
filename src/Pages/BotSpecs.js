import React, { useEffect, useState } from 'react'
import { FaHeartPulse ,FaBoltLightning} from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';


function BotDetails({getBots}) {
  const [bot, setBot] = useState([]);
  const {id} = useParams()
  const navigate = useNavigate()
  

//5.  displaying a show view for that bot
  const getBotById = async () => {
    try {
      const response = await fetch(`https://wk2-cc.onrender.com/bots/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBot(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBotById();
  }, []);



  //6. Adding  individual bot to the YourBotArmy and enlisting once
  //7. And when enlist a bot it will be removed from the BotCollection and added to YourBotArmy
  const enlistBot = async () => {
    try {
      const armyResponse = await fetch("https://wk2-cc.onrender.com/yourArmy");
      if (!armyResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const army = await armyResponse.json();


      const isEnlisted = army.some((enlistedBot) => enlistedBot.bot_class === bot.bot_class);
      if (!isEnlisted) {
        const armyData = {
          id: bot.id,
          name: bot.name,
          health: bot.health,
          damage: bot.damage,
          armor: bot.armor,
          bot_class: bot.bot_class,
          catchphrase: bot.catchphrase,
          avatar_url: bot.avatar_url
        };
  
        // Enlist the bot in YourBotArmy
        const enlistResponse = await fetch("https://wk2-cc.onrender.com/yourArmy", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(armyData),
        });
  
        if (!enlistResponse.ok) {
          throw new Error("Failed to enlist bot");
        }
  
      // Remove the bot from the BotCollection using bot.id
      const removeResponse = await fetch(`https://wk2-cc.onrender.com/bots/${bot.id}`, {
        method: 'DELETE',
      });
      if (!removeResponse.ok) {
          throw new Error("Failed to remove bot from BotCollection");
      } else {
          console.log('Bot removed from BotCollection successfully');
      }
        setBot(armyData);
        alert("Bot enlisted successfully!");
        navigate("/")
        getBots()
      } else {
        console.log(`A bot from the class ${bot.bot_class} is already enlisted.`);
      }
    } catch (error) {
      console.error('Error enlisting bot:', error);
    }
  };
  

  //8. Discharge a bot from their service forever
  const discharge = async (botId) => {
    try {
      const deleteResponse = await fetch(`https://wk2-cc.onrender.com/bots/${botId}`, {
        method: 'DELETE',
      });
      if (!deleteResponse.ok) {
        throw new Error("Failed to delete bot from backend");
      }

     alert("Bot discharged successfully!");
       navigate("/")
       getBots()
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };


  
  return (
    <div className='byid-container' > 
      <div className='byid-div'>
        <div className='image-div'>
          <img className='image' src={bot.avatar_url}/>
        </div>
        <div>
          <div>
            <p className='header'>Name: {bot.name}</p>
            <p className='byid-text'>
              <span className='header'>Catchphrase:</span>
              <span>{bot.catchphrase}</span>
            </p>
            <p className='byid-text'>
              <span className='header'>class:</span>
              <span>{bot.bot_class}</span>
            </p>
          </div>

          <div className='byid-category'>
            <div className='category'>
              <span className='heart'><FaHeartPulse/></span>
              <span className='p'>{bot.health}</span>
            </div>
            <div className='category'>
              <span className='lightning'><FaBoltLightning /></span>
              <span className='p'>{bot.damage}</span>
            </div>
            <div className='category'>
              <span className='shield'><FaShieldAlt /></span>
              <span className='p'>{bot.armor}</span>
            </div>
          </div>

          <div className='byid-button'>
             <Link to='/'>
               <button className='button-back'>Go Back</button>
              </Link>
            <button onClick={enlistBot} className='button-enlist'>Enlist</button>
            <button onClick={() => discharge(bot.id)} className='button-delete'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotDetails