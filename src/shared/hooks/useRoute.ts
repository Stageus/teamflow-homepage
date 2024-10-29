import { useNavigate, useParams } from "react-router-dom"
import { PATHS } from "../consts/paths";

export const useRoute = () => {
    const navigate = useNavigate();
    const params = useParams();
    const urlTeamspaceName = params[PATHS.teamSpaceName];
    
    const loginRoute = () => {
        navigate(`/${PATHS.login}`);
    };
    const signupRoute = () => {
        navigate(`/${PATHS.signup}`);
    };
    const teamspaceListRoute = ()=>{
        navigate(`/${PATHS.teamSpaceList}`);
    };
    const teamspaceRoute = (teamspaceName: string)=>{
        navigate(`/${PATHS.teamSpace}/${teamspaceName}`);
    };
    const teamspacePublicRoute = ()=>{
        navigate(`${PATHS.teamSpace}/${urlTeamspaceName}/public`);
    };
    const teamspacePrivateRoute = (channelName: string)=>{
        navigate(`${PATHS.teamSpace}/${urlTeamspaceName}/${PATHS.private}/${channelName}`);
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