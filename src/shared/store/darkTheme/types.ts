import { ReactNode } from "react";

export interface DarkModeContextType {
    changeTheme: () => void;
}
export interface DarkModeProviderProps {
    children: ReactNode;
}