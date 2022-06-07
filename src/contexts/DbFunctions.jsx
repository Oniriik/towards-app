
import React, { useContext } from 'react'
import firebase from 'firebase/compat/app'
import { db } from '../config/firebase'
// import { useAuth } from './AuthProvider'
import { collection, query, where, getDocs } from "firebase/firestore";

const dbContext = React.createContext()

export function useDbFunctions() {
    return useContext(dbContext)
}

export function DbFunctions({ children }) {

    // const { currentUser } = useAuth()

    function createUserProfile(infos, uid) {
        db.collection('users').doc(uid).set({
            ...infos,
            signupDate: firebase.firestore.Timestamp.fromDate(new Date())
        })
    }

    async function findUsername(username) {
        const q = query(collection(db, "users"), where("username", "==", username))
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs[0] ? querySnapshot.docs[0].data() : undefined
    }
    const value = {
        createUserProfile,
        findUsername
    }

    return (
        <dbContext.Provider value={value}>
            {children}
        </dbContext.Provider>
    )
}












