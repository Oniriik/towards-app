import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
    <img src={require("../../assets/logo.png")} alt="towardsLogo" />
    <div className='sign'>
      <Link to="/signin">Sign In</Link>
      <button className='signup'><Link to="/signup">Sign Up</Link></button>
    </div>
    </div>
  )
}
