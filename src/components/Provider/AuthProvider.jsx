import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

     const [user,setUser]= useState(null)

     const createUser=(displayName,email,password)=>{
       return createUserWithEmailAndPassword(auth,displayName,email,password);
     }
     const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);

     }
     const logout=()=>{
       return signOut(auth)
     }
     useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('currentuser:',currentUser)
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe()
        }
     },[])

    const authInfo={
        user,
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