import { useLocation } from "react-router-dom";

export const useCurrentUrlInfo = () => {
    const location = useLocation();
    const currentPath = location.pathname.split("/");
    const getCurrentPathName = ( path: string ) => currentPath.includes(path);
    return { getCurrentPathName };
}