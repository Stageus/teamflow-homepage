import { useNavigate } from "react-router-dom"
import { PATHS } from "../consts/paths";

export const useRoute = () => {
    const navigate = useNavigate();
    const loginRoute = () => {
        navigate(`/${PATHS.login}`);
    };
    const signupRoute = () => {
        navigate(`/${PATHS.signup}`);
    };
    const teamspaceListRoute = ()=>{
        navigate(`/${PATHS.teamspaceList}`);
    };
    const teamspaceRoute = (teamspaceName: string)=>{
        navigate(`/${PATHS.teamspace}/${teamspaceName}`);
    };
    const teamspacePublicRoute = ()=>{
        navigate(PATHS.public);
    };
    const teamspacePrivateRoute = (channelName: string)=>{
        navigate(`${PATHS.private}/${channelName}`);
    };

    return{
        loginRoute,
        signupRoute,
        teamspaceListRoute,
        teamspaceRoute,
        teamspacePublicRoute,
        teamspacePrivateRoute,
    };
}