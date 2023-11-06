import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

     const [user,setUser]= useState(null)
     const [loading,setLoading]=useState(true)

     const createUser=(displayName,email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,displayName,email,password);
     }
     const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

     }
     const logout=()=>{
        setLoading(true);
       return signOut(auth)
     }
     useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('currentuser:',currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe()
        }
     },[])

    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;