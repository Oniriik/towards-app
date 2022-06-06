import React, { useState } from 'react'
import './usernameselector.css'
import { useDbFunctions } from '../../contexts/DbFunctions';

export default function UsernameSelect({ setStep, updateInfos }) {
  const { findUsername } = useDbFunctions()
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  async function handleClick() {
    updateInfos({ username })
    setStep(1)

  }
  async function updatedField(username) {
    setUsername(username)

    if (username.length > 4) {
      const isAvailable = await findUsername(username)
      isAvailable ? setError('Username not available :/') : setError('')
    }
  }

  return (
    <div className="usernameselect">
      <h2>Pick your username</h2>
      <div className='username-field'>
        <img src={require("../../assets/logo_simple.png")} alt="" />
        <p>twrds.link/</p>
        <input value={username} onChange={event => updatedField(event.target.value)} type="text" placeholder='username' />
      </div>
      {error}
      <button onClick={handleClick}>next</button>
      <div></div>
    </div>
  )
}
