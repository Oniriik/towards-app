import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthProvider'
import { useDbFunctions } from '../../contexts/DbFunctions'

export default function Dashboard() {
  const navigate = useNavigate()
  const {currentUser} = useAuth()
  const {getUserInfos} = useDbFunctions()
  const [userInfos, setUserInfos] = useState()
  useEffect(()=>{

    if(!currentUser){
      navigate('/')
    }
    fetchUserInfos()
    
  },[currentUser])
  
  async function fetchUserInfos(){
    const infos = await getUserInfos()
    return setUserInfos(await infos)
  }
  return (
    <>
    <div>Dashboard</div>
    {userInfos && JSON.stringify(userInfos)}
    </>
  )
}
