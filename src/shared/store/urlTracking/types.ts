import { ReactNode } from "react";

export interface UrlTrackingContextType {
    getCurrentPathName: ( path: string ) => boolean;
}

export interface UrlTrackingProviderProps {
    children: ReactNode;
}