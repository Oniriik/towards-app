import React, { useState } from 'react'
import "./newuser.css"
import UsernameSelect from '../../components/UsernameSelect/UsernameSelect'
import SignUp from '../../components/SignUp/SignUp'
import FirstSetup from '../../components/FirstSetup/FirstSetup'
import NewUserState from '../../components/NewUserState/NewUserState'

export default function NewUser() {
    const [step, setStep] = useState(0)
    const [username,setUsername] = useState()
    const [instagramLink,setInstagramLink] = useState()
    const [tiktokLink,setTiktokLink] = useState()
    const [twitterLink,setTwitterLink] = useState()
    return(
        <div className='newuser-wrapper container'>
        <NewUserState state = { step } setStep = { setStep }/>
        {step === 0 ?
        <UsernameSelect setStep = { setStep }/>
        :
        step === 1 ?
        <SignUp setStep = { setStep }/>
        :
        step === 2 ?
        <FirstSetup/>
        :
        <UsernameSelect/>
        }
        </div>
    )
}
