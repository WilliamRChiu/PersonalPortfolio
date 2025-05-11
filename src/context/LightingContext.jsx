import { createContext, useContext, useState } from "react";

export const LightingContext = createContext();

export const LightingProvider = ({children}) => {
    const [lighting, setLighting] = useState("day");
    //lighting can either be day or night

    const toggleLighting = () => {
        setLighting (lighting == "day" ? "night" : "day")
    }

    return(
        <LightingContext.Provider value = {{lighting, toggleLighting}}>
            {children}
        </LightingContext.Provider>
    )
}

export const useLighting = () => useContext(LightingContext)