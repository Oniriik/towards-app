import React, { useState } from 'react'
import "./newuser.css"
import UsernameSelect from '../../components/UsernameSelect/UsernameSelect'
import SignUp from '../../components/SignUp/SignUp'
import FirstSetup from '../../components/FirstSetup/FirstSetup'
import NewUserState from '../../components/NewUserState/NewUserState'
import { useDbFunctions } from '../../contexts/DbFunctions'

export default function NewUser() {
    const [step, setStep] = useState(0)
    const [userInfos,setUserinfos] = useState({
        username:'tim',
        name:'timothe',
        links:{
            instagram:'xtimothe',
            twitter:'rizcollant',
            tiktok:'xtimothe',
        }
    })
    const { createUserProfile} = useDbFunctions()

    async function handleclick(){
        try{
            await createUserProfile(userInfos)
        }catch(e){
            console.log(e)
        }
        
    }
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
