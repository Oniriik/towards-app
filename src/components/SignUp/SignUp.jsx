import React, { useRef, useState, useEffect } from 'react'
import "./signup.css"
import { useAuth } from '../../contexts/AuthProvider'
export default function SignUp({setStep}) {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordconfirmRef = useRef()
  const { signup, currentUser} = useAuth()
  

  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    currentUser && setStep(2)
  },[currentUser])

  async function handleSubmit(e) {
    
    e.preventDefault();
    if (passwordRef.current.value.length < 6) {
      return setError("password must be atleast 6 characters ")
    }
    if (passwordRef.current.value !== passwordconfirmRef.current.value) {

      passwordRef.current.value = ''
      return setError("password do not match")
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      console.error(error);
      setError("Error creating an account")
    }
    setLoading(false)
  }
  function previous(){
    setStep(0)
  }
  return (
    <div className='signupForm'>
    {currentUser && JSON.stringify(currentUser.email)}
      <h2>Tell us about you</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' ref={nameRef} />
        <input type="text" placeholder='email' ref={emailRef} />
        <input type="password" placeholder='password' ref={passwordRef} />
        <input type="password" placeholder='password confirm' ref={passwordconfirmRef} />
        <p className='errorMsg'>{error}</p>
        <button disabled={loading}>sign up</button>
      </form>
      <div className='separator'>
      <hr /><p>or</p><hr />
      </div>
      <button className='googleSignup'><p>signup with </p><img src='https://i.ibb.co/F5THtXr/google-Icon.png' alt="googleIcon" /></button>
      <button className='previous' onClick={previous}>&lt;--</button>
    </div>
  )
}
