import React, { useEffect, useState } from 'react'
import LinkInput from '../LinkInput/LinkInput'
import './firstsetup.css'
import { useDbFunctions } from '../../contexts/DbFunctions'
import { useNavigate } from 'react-router-dom'

export default function FirstSetup() {
  const navigate = useNavigate()
  const [isEmpty, setIsEmpty] = useState(true)
  const [links, setLinks] = useState()
  const [insta, setinsta] = useState({ user: '' })
  const [twitter, setTwitter] = useState({ user: '' })
  const [tiktok, setTiktok] = useState({ user: '' })

  const { updateUserProfile } = useDbFunctions()

  
  async function HandleClick(){
    await updateUserProfile({links})
    navigate('/dashboard')
  }


  useEffect(() => {
    if (insta.user.length > 0 || twitter.user.length > 0 || tiktok.user.length > 0) {
      setIsEmpty(false)
    } else { setIsEmpty(true) }
    setLinks([insta, twitter, tiktok])
  }, [insta, twitter, tiktok])


  return (
    <div className="firstsetup">
      <h2>Setup your first links &#x1F517;</h2>
      <div className='links'>
        <LinkInput img="insta" baseUri="instagram.com/" updateLink={setinsta} />
        <LinkInput img="twitter" baseUri="twitter.com/" updateLink={setTwitter} />
        <LinkInput img="tiktok" baseUri="tiktok.com/@" updateLink={setTiktok} />
      </div>
      <button onClick={HandleClick}>{isEmpty ? "skip" : "continue"}</button>
    </div>
  )
}
