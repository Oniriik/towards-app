import React, { useState } from 'react'
import "./newuser.css"
import useDocumentTitle from '../../functions/useDocumentTitle'
import UsernameSelect from '../../components/UsernameSelect/UsernameSelect'
import SignUp from '../../components/SignUp/SignUp'
import FirstSetup from '../../components/FirstSetup/FirstSetup'
import NewUserState from '../../components/NewUserState/NewUserState'
import { useDbFunctions } from '../../contexts/DbFunctions'
export default function NewUser() {
    useDocumentTitle("Towards - Sign Up")
    const { createUserProfile } = useDbFunctions()
    const [step, setStep] = useState(0)
    const [userInfos, setUserinfos] = useState()
    
    function updateInfos(update){
        setUserinfos({...userInfos,...update})
    }
    async function initUser(uid) {
        try {
            await createUserProfile(userInfos,uid)
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <div className='newuser-wrapper container'>
            <NewUserState state={step} setStep={setStep} />
            {step === 0 ?
                <UsernameSelect setStep={setStep} updateInfos={updateInfos} />
                :
                step === 1 ?
                    <SignUp setStep={setStep} updateInfos={updateInfos} initUser={initUser}/>
                    :
                    step === 2 ?
                        <FirstSetup updateInfos={updateInfos}/>
                        :
                        <UsernameSelect setStep={setStep} updateInfos={updateInfos}/>
            }
        </div>
    )
}
