import React, { useState } from 'react'
import UsernameSelect from '../../components/UsernameSelect/UsernameSelect'
import SignUp from '../../components/SignUp/SignUp'
import FirstSetup from '../../components/FirstSetup/FirstSetup'

export default function NewUser() {
    const [step, setStep] = useState(0)
    const [username,setUsername] = useState()
    const [instagramLink,setInstagramLink] = useState()
    const [tiktokLink,setTiktokLink] = useState()
    const [twitterLink,setTwitterLink] = useState()
    switch (step) {
        case 0:
            return (<UsernameSelect setStep={setStep}/>)
           
        case 1:
            return (<SignUp setStep={setStep}/>)
            
        case 2:
            return (<FirstSetup setStep={setStep}/>)
            

        default:
            return('error')
       
    }
}
