import { Dispatch, SetStateAction, ReactNode } from "react";

export interface DarkModeContextType {
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
}
export interface DarkModeProviderProps {
    children: ReactNode;
}