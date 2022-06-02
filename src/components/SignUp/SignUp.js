import React, { useRef, useState} from 'react'
import "./signup.css"
import { useAuth } from '../contexts/AuthProvider'

export default function SignUp() {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordconfirmRef = useRef()
  const { signup } = useAuth()

  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value.length < 6 ){
      return setError("Password must be atleast 6 characters ")
    }
    if (passwordRef.current.value !== passwordconfirmRef.current.value){

      passwordRef.current.value = ''
      return setError("Password do not match")
    }
    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      
    }catch(error){
      console.error(error);
      setError("Error creating an account")
    }
    setLoading(false)
  }
  return (
      <div className='signupForm'>
        <h2>Tell us about you</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='name' ref={nameRef}/>
          <input type="text" placeholder='email' ref={emailRef} />
          <input type="password" placeholder='password' ref={passwordRef} />
          <input type="password" placeholder='password confirm' ref={passwordconfirmRef} />
          {error}
          <button disabled={loading}>sign up</button>
        </form>
      </div>
  )
}
