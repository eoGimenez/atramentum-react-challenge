import axios from "axios";
import { createContext, useEffect, useState } from "react";

const authContext = createContext();

function AuthProviderWrapper({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const storeToken = (token) => {
        localStorage.setItem('token', token);
    }

    const getToken = () => {
        return localStorage.getItem('token');
    }

    const isAuthenticated = () => {
        setIsLoading(true);

        const token = getToken();
        if(token) {
            setIsLoggedIn(true);
            setTimeout(()=>{
                setIsLoading(false)
            }, 1000);
        } else {
            setIsLoggedIn(false);
            setTimeout(()=> {
                setIsLoading(false);
            }, 1000)
        }
    }
    useEffect(()=>{
        isAuthenticated()
    }, []);

    return (
        <authContext.Provider value={{isLoggedIn, isLoading, storeToken, getToken, isAuthenticated, setIsLoading }}>
            {children}
        </authContext.Provider>
    )

}

export {authContext, AuthProviderWrapper}