import React, { useEffect, useState } from 'react'
import { FaHeartPulse ,FaBoltLightning} from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';


function BotDetails() {
  const [bot, setBot] = useState([]);

 const {id} = useParams()
  
  const getBots = async () => {
    try {
      const response = await fetch(`https://wk2-cc.onrender.com/bots/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBot(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBots();
  }, []);


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
            <button className='button-enlist'>Enlist</button>
            <button className='button-delete'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotDetails