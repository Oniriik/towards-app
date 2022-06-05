import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthProvider'

export default function Header() {
  const { currentUser } = useAuth()
  return (
    <div className='header'>
      <img src={require("../../assets/logo.png")} alt="towardsLogo" />
      {!currentUser ? 
      <div className='sign'>
        <Link to="/signin">Sign In</Link>
        <button className='signup'><Link to="/signup">Sign Up</Link></button>
      </div> 
      :
       <button><Link to={'/dashboard'}>Dashboard</Link></button>}
    </div>
  )
}
