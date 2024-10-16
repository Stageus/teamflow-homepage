import { ReactNode } from "react";

export type DarkModeContextType = {
    theme: boolean;
    changeTheme: () => void;
}

export type UrlTrackingContextType = {
    getCurrentPathName: ( path: string ) => boolean;
}

export type ProviderProps = {
    children: ReactNode;
}