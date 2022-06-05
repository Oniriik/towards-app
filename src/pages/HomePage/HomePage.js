import React from 'react'
import Header from '../../components/Header/Header'
import { useAuth } from '../../contexts/AuthProvider'

export default function HomePage() {
  const { signOut ,currentUser} = useAuth()
  async function handleSignOut(){
    try{
      await signOut()
    }catch(error){
      console.error("error logging out")
    }
    
  }
  return (
    <>
    <Header/>
    {currentUser && JSON.stringify(currentUser.email)}

    <button onClick={handleSignOut}>signOut</button>
    </>
  )
}
