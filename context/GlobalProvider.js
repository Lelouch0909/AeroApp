import {createContext, useContext, useEffect, useState} from "react";
import {getCurrentUser} from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getCurrentUser().then(
            (result) => {
                console.log(result)
                console.log(22222)
                if (result) {
                    console.log(8)
                    setUser(result)
                    setIsLoggedIn(true)
                } else {
                    setUser(null)
                    setIsLoggedIn(false)
                }
            }
        ).catch(
            (e) => {
                console.log(222222)
                console.log(e)
            }
        )
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <GlobalContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser, isLoading, setIsLoading}}>
            {children}
        </GlobalContext.Provider>
    )

    return (
        <GlobalContext.Provider value={{user, setUser}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider