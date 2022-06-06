import React ,{useState} from 'react'
import './usernameselector.css'

export default function UsernameSelect({ setStep, updateInfos}) {
  const [username, setUsername] = useState('');
  function handleClick() {
    updateInfos({username})
    setStep(1)
  }

  return (
    <div className="usernameselect">
      <h2>Pick your username</h2>
      <div className='username-field'>
        <img src={require("../../assets/logo_simple.png")} alt="" />
        <p>twrds.link/</p>
        <input value={username} onChange={event => setUsername(event.target.value)} type="text" placeholder='username' />
      </div>
      <button onClick={handleClick}>next</button>
      <div></div>
    </div>
  )
}
