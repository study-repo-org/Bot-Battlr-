import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddBot() {
    const [image , setImage] = useState()
    const [name, setName] = useState()
    const [catchphrase, setCatchphrase] = useState()
    const [classBot, setClassBot] = useState()
    const [heart, setHeart] = useState()
    const [damage, setDamage] = useState()
    const [armor, setArmor] = useState()
    const navigate = useNavigate()

    const handlePost = async (e) => {
        e.preventDefault();        

        try {

        const botData = {
            image: image,
            name: name,
            catchphrase: catchphrase,
            classBot: classBot,
            heart:heart,
            damage: damage,
            armor: armor

          };
          const response = await fetch("https://wk2-cc.onrender.com/bots", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(botData),
          });
          if (!response.ok) {
            throw new Error('Failed to create Account');
          }
          setImage('')
          setName('')
          setCatchphrase('')
          setClassBot('')
          setHeart('')
          setDamage('')
          setArmor('')

         alert('Bot Created Successfully')
         navigate('/')

        } catch (error) {
          console.error('Error adding transaction:', error);
        }
      };


  return (
    <div className='form-container'>
        <div className='div-container'>
            <h3>Create Bot</h3>
            <form onSubmit={handlePost}>
               <div className='div-input'>
               <label>Image</label>
                <input type='text' value={image} onChange={(e) => setImage(e.target.value)} placeholder='Image' required />
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
                <label>Heart</label>
                <input type='number' value={heart} onChange={(e) => setHeart(e.target.value)} placeholder='Heart' required/>
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