import { createContext } from "react";
import { useScreenSize } from "../hooks/CustomsHooks";

export const GeneralContext = createContext()

export const GeneralProvider = ({children}) => {
    const screenWidth = useScreenSize()
    return(
        <GeneralContext.Provider value={{screenWidth}}>
            {children}
        </GeneralContext.Provider>
    )
}