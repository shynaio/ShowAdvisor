import { createContext, useContext, useState } from "react";
import { DarkModeCtx } from "../../types/context";

export const DarkModeContext = createContext<DarkModeCtx>({
    isDarkMode: false,
    setIsDarkMode: () => {}
});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({children}: {children: any}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
};