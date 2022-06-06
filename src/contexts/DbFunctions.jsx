
import React, { useContext } from 'react'
import firebase from 'firebase/compat/app'
import { db } from '../config/firebase'
import { useAuth } from './AuthProvider'

const dbContext = React.createContext()

export function useDbFunctions() {
    return useContext(dbContext)
}

export function DbFunctions({ children }) {

    const { currentUser } = useAuth()
    function createUserProfile(infos,uid) {
        db.collection('users').doc(uid).set({
            ...infos,
            signupDate : firebase.firestore.Timestamp.fromDate(new Date)
        })
    }

    function getUserInfos() {

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












