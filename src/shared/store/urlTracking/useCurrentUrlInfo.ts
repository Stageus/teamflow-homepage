import { useLocation } from "react-router-dom";

export const useCurrentUrlInfo = () => {
    const location = useLocation();
    const currentPath = location.pathname.replace("/","");
    
    const getCurrentPathName = ( path: string ) => currentPath === path;
    

    return { getCurrentPathName };
}