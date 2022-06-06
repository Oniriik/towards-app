import React from 'react'
import "./newuserstate.css"

export default function NewUserState({state, setStep}) {
    function previous(){
        setStep(0)
    }
  return (
    <div className='newuser-state'>
        <p className="purple first-step" onClick={previous}>1. Claim your username</p>
        <p className={state >= 1 ? "purple" : "grey"}>2. Create your account</p>
        <p className={state >= 2 ? "purple" : "grey"}>3. Setup your page</p>
    </div>
  )
}
