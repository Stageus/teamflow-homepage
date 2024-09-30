import { createContext, useContext } from "react";
import { DarkModeContextType } from "./types";

export const DarkThemeContext = createContext<DarkModeContextType>({
    theme: false,
    setTheme: () => {}
})

export const useDarkTheme = () => useContext(DarkThemeContext);
