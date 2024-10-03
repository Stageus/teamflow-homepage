import { ReactNode } from "react";

export interface DarkModeContextType {
    theme: boolean;
    changeTheme: ()=>void;
}
export interface DarkModeProviderProps {
    children: ReactNode;
}