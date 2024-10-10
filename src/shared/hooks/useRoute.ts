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
    const teamspacePublicRoute = (teamspaceName: string)=>{
        navigate(`/${PATHS.teamspace}/${teamspaceName}/${PATHS.public}`);
    };
    const teamspacePrivateRoute = (teamspaceName: string, channelName: string)=>{
        navigate(`/${PATHS.teamspace}/${teamspaceName}/${PATHS.private}/${channelName}`);
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