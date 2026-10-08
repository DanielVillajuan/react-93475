import { createContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut  
} from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(
            auth,
            (currentUser) => {
                console.log(currentUser)
                setUser(currentUser)
                setLoading(false)
            }
        )
    },[])

    const register = (email, password) => {
        try {
            createUserWithEmailAndPassword(auth, email, password)
            console.log("user registrado")
        } catch (e) {
            console.log(e)
        }
    }

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch(e) {
            console.log(e)
        }
    }

    const logout = () => {
        signOut(auth)
    }

    return <AuthContext.Provider value={{ register, login, logout, user, loading }}>
        {children}
    </AuthContext.Provider>

}