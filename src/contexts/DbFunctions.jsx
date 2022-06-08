
import React, { useContext } from 'react'
import firebase from 'firebase/compat/app'
import { db } from '../config/firebase'
import { useAuth } from './AuthProvider'
import { collection, query, where, getDocs } from "firebase/firestore";

const dbContext = React.createContext()

export function useDbFunctions() {
    return useContext(dbContext)
}

export function DbFunctions({ children }) {
    
    const { currentUser } = useAuth()

    function createUserProfile(infos) {
        db.collection('users').doc(currentUser.uid).set({
            ...infos,
            signupDate: firebase.firestore.Timestamp.fromDate(new Date())
        })
    }
    function updateUserProfile(infos) {
        db.collection('users').doc(currentUser.uid).update({
            ...infos,
        })
    }
    async function findUsername(username) {
        const q = query(collection(db, "users"), where("username", "==", username))
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs[0] ? querySnapshot.docs[0].data() : undefined
    }
    const value = {
        createUserProfile,
        updateUserProfile,
        findUsername
    }

    return (
        <dbContext.Provider value={value}>
            {children}
        </dbContext.Provider>
    )
}












