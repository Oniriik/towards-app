import React, { useRef, useState } from 'react'
import "./signin.css"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthProvider'
import useDocumentTitle from '../../functions/useDocumentTitle'

export default function SignIn() {
    useDocumentTitle("Towards - Sign in")
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin, currentUser } = useAuth()

    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            navigate('/dashboard')
        } catch (error) {
            console.error(error);
            setError("Failed to sign in")
        }
        setLoading(false)

    }
    return (
        <div className='signInForm'>
            {currentUser && JSON.stringify(currentUser.email)}
            <h2>Welcome back !</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Email' ref={emailRef} />
                <input type="password" placeholder='Password' ref={passwordRef} />
                <p className='errorMsg'>{error}</p>
                <button disabled={loading}>sign In</button>
            </form>
            <div className='separator'>
                <hr /><p>or</p><hr />
            </div>
            <button className='googleSignin'><p>sign In with </p><img src='https://i.ibb.co/F5THtXr/google-Icon.png' alt="googleIcon" /></button>
        </div>
    )
}
