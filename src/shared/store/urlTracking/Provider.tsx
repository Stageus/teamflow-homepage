import { ProviderProps } from "../types";
import { UrlTrackingContext } from "./context";
import { useCurrentUrlInfo } from "./useCurrentUrlInfo";

export const UrlTrackingProvider = ( props: ProviderProps ) => {
    const { children } = props;
    const { getCurrentPathName } = useCurrentUrlInfo();
    
    return(
        <UrlTrackingContext.Provider value={{getCurrentPathName}}>
            {children}
        </UrlTrackingContext.Provider>
    );
}