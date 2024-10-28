import { useNavigate, useParams } from "react-router-dom"
import { PATHS } from "../consts/paths";

export const useRoute = () => {
    const navigate = useNavigate();
    const { teamspace_name } = useParams();
    
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
        navigate(`${PATHS.teamspace}/${teamspace_name}/public`);
    };
    const teamspacePrivateRoute = (channelName: string)=>{
        navigate(`${PATHS.teamspace}/${teamspace_name}/${PATHS.private}/${channelName}`);
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