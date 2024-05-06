import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddBot({handlePost}) {
  const [avatar_url , setAvatar_url] = useState()
  const [name, setName] = useState()
  const [catchphrase, setCatchphrase] = useState()
  const [classBot, setClassBot] = useState()
  const [health, setHealth] = useState()
  const [damage, setDamage] = useState()
  const [armor, setArmor] = useState()
  const navigate = useNavigate()

    
  const handleSubmit = (e) => {
        e.preventDefault();  

        const botData = {
            avatar_url: avatar_url,
            name: name,
            catchphrase: catchphrase,
            classBot: classBot,
            health:health,
            damage: damage,
            armor: armor
        };
        handlePost(botData)
          setAvatar_url('')
          setName('')
          setCatchphrase('')
          setClassBot('')
          setHealth('')
          setDamage('')
          setArmor('')

         alert('Bot Created Successfully')
         navigate('/')
  };


  return (
    <div className='form-container'>
        <div className='div-container'>
            <h3>Create Bot</h3>
            <form onSubmit={handleSubmit}>
               <div className='div-input'>
               <label>Avatar_url</label>
                <input type='text' value={avatar_url} onChange={(e) => setAvatar_url(e.target.value)} placeholder='avatar_url' required />
               </div>

               <div className='div-input'>
               <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'  required/>
               </div>

               <div className='div-input'>
               <label>Catchphrase</label>
                <input type='text' value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)} placeholder='Catchphrase' required/>
               </div>

               <div className='div-input'>
               <label>Class_bot</label>
                <input type='text' value={classBot} onChange={(e) => setClassBot(e.target.value)} placeholder='class_bot' required/>
               </div>

                <div className='div-input'>
                <label>Health</label>
                <input type='number' value={health} onChange={(e) => setHealth(e.target.value)} placeholder='health' required/>
                </div>

                <div className='div-input'>
                <label>Damage</label>
                <input type='number' value={damage} onChange={(e) => setDamage(e.target.value)} placeholder='Damage' required/>
                </div>

                <div className='div-input'>
                <label>Armor</label>
                <input type='number' value={armor} onChange={(e) => setArmor(e.target.value)} placeholder='Armor' required/>
                </div>

                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddBot