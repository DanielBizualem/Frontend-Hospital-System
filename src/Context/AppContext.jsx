import { createContext } from "react";
import { doctors } from "../asset/assets";

export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const currencySymbol = '$'
    const value = {
        doctors,
        currencySymbol
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider