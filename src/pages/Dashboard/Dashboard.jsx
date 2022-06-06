import React from 'react'
import './dashboard.css'
import { useAuth } from '../../contexts/AuthProvider'
import { Navigate,useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const { signOut ,currentUser} = useAuth()
  async function handleSignOut(){
    try{
      await signOut()
      navigate('/')
    }catch(error){
      console.error("error logging out")
    }
    
  }
  
  if(!currentUser){
    return <Navigate to='/' replace/>
  }

  
  return (
    <>
    <div>Dashboard</div>
    <p>Connected using {currentUser.email}</p>
    <button onClick={handleSignOut}>signOut</button>
    {JSON.stringify(currentUser,null,'\t')}
    <hr />
    {JSON.stringify(currentUser.uid)}
}
    </>
  )
}
