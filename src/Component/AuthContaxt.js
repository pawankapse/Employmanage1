import { createContext, useContext, useEffect, useState } from "react";
const AuthContaxt = createContext();
export const AuthProvider = ({children}) =>{
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    // useEffect(()=>{
    //     const token = localStorage.getItem('token')
    //     setIsLoggedIn(true)
    // },[])
    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        setIsLoggedIn(true)
    } else {
        setIsLoggedIn(false)
    }
},[])

    // login Function
    const login = (token) =>{
        setIsLoggedIn(true)
        localStorage.setItem('token',token)
    }
    // logout function

    const logOut = () =>{
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }
    return(

        <AuthContaxt.Provider value = {{isLoggedIn,login,logOut}}>

            {children}

        </AuthContaxt.Provider>
    )
}
export const useAuth = () => useContext(AuthContaxt)