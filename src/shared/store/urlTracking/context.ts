import { createContext, useContext } from "react";
import { UrlTrackingContextType } from "./types";

export const UrlTrackingContext = createContext<UrlTrackingContextType>({
    getCurrentPathName: () => false,
})

export const useUrlTracking = () => useContext(UrlTrackingContext);
