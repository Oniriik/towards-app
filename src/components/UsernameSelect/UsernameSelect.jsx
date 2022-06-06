import React from 'react'

export default function UsernameSelect({setStep}) {
    function handleClick(){
        setStep(1)
    }
  
    return (
      <>
    <div>UsernameSelect</div>
    <button onClick={handleClick}>next</button>
    </>
  )
}
