import React, { useState, useEffect } from 'react'
import "./signup.css"
import { useAuth } from '../../contexts/AuthProvider'

export default function SignUp({ setStep, updateInfos, initUser }) {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPwd] = useState()
  const [passwordConfirm, setPwdConfirm] = useState()

  const { signup, currentUser } = useAuth()


  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (currentUser) {
      setStep(2)
      initUser()
    }
  }, [currentUser])

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.lenght < 6) {
      setPwd('')
      setPwdConfirm('')
      return setError("password must be atleast 6 characters ")
    }
    if (password !== passwordConfirm) {

      setPwd('')
      setPwdConfirm('')
      return setError("password do not match")
    }
    try {
      setError('')
      setLoading(true)
      await signup(email, password)
    } catch (error) {
      console.error(error);
      setError("Error creating an account")
    }
    setLoading(false)
    updateInfos({ name, email})
  }
  function previous() {
    setStep(0)
  }
  return (
    <div className='signupForm'>
      {currentUser && JSON.stringify(currentUser.email)}
      <h2>Tell us about you</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' maxlength="15" value={name} onChange={event => setName(event.target.value)} />
        <input type="text" placeholder='email' maxlength="35" value={email} onChange={event => setEmail(event.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={event => setPwd(event.target.value)} />
        <input type="password" placeholder='password confirm' value={passwordConfirm} onChange={event => setPwdConfirm(event.target.value)} />
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
