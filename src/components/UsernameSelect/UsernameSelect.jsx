import React, { useState } from 'react'
import './usernameselector.css'
import { useDbFunctions } from '../../contexts/DbFunctions';

export default function UsernameSelect({ setStep, updateInfos }) {
  const { findUsername } = useDbFunctions()
  const [username, setUsername] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  async function handleClick() {
    updateInfos({ username })
    setStep(1)

  }
  async function updatedField(username) {
    setUsername(username)
    if (username.length > 4) {
      console.log(await findUsername(username))
      const find = await findUsername(username)
      find ? setIsAvailable(false) : setIsAvailable(true)
    }
    
  }

  return (
    <div className="username-selection-wrapper">
      <div className='username-selection'>
        <h2>Pick your username</h2>
        <div className='username-field'>
          <img src={require("../../assets/logo_simple.png")} alt="" />
          <p>twrds.link/</p>
          <input value={username} onChange={event => updatedField(event.target.value)} type="text" placeholder='username' />
        </div>
        {username.length > 4 ? isAvailable ? <button onClick={handleClick}>&#10003;</button> : <p className='error'>Username not available :/</p> : ''}

      </div>
      <div className="username-selection-tips">
        <img src={require('../../assets/tips.png')} alt="" />
        <p>Pick an username that remember your socials to help your fans recognize you. </p>
      </div>
    </div>
  )
}
