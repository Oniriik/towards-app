import React, { useState } from 'react'
import { useDbFunctions } from '../../contexts/DbFunctions'
import { useAuth } from '../../contexts/AuthProvider'
import SignUp from '../../components/SignUp/SignUp'
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
    const {currentUser} = useAuth()
    const { createUserProfile} = useDbFunctions()

    async function handleclick(){
        try{
            console.log(currentUser)
            await createUserProfile(userInfos)
        }catch(e){
            console.log(e)
        }
        
    }
    return(
        <>
        <button onClick={handleclick}>send</button>
        </>
    )
}
