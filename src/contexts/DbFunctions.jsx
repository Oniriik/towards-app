
import React, { useContext } from 'react'

import {db} from '../config/firebase'
import { useAuth } from './AuthProvider'

const dbContext = React.createContext()

export function useDbFunctions(){
    return useContext(dbContext)
}

export function DbFunctions({ children }){
    
    const {currentUser} = useAuth()
    function createUserProfile({name,username,links}){
        db.collection('users').doc(currentUser.uid).set({
            username,
            name,
            links
        })
    }
    
    function getUserInfos(){
    
    }

    const value = {
        createUserProfile,
        getUserInfos
    }
    
    return (
        <dbContext.Provider value={value}>
            {children}
        </dbContext.Provider>
    )
}












