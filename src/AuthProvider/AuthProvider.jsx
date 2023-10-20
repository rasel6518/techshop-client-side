import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Components/Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)




    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)


            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authinfo = {
        user,
        loading,
        CreateUser,
        LogOut,
        signIn,


    }
    return (
        <AuthContext.Provider value={authinfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;


