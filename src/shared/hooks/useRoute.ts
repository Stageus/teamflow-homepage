import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from "react-router-dom"
import { PATHS } from "../consts/paths";

export const useRoute = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [cookies, setCookie_, removeCookie] = useCookies(['token']);
    const getTeamspaceName = params[PATHS.TEAMSPACENAME];
    
    const loginRoute = () => {
        if(cookies.token) removeCookie('token', { path: '/' });
        navigate(`/${PATHS.LOGIN}`);
    };
    const signupRoute = () => {
        navigate(`/${PATHS.SIGNUP}`);
    };
    const teamspaceListRoute = ()=>{
        navigate(`/${PATHS.TEAMSPACELIST}`);
    };
    const teamspaceRoute = (teamSpaceName: string)=>{
        navigate(`/${teamSpaceName}/${PATHS.NOTICE}`);
    };
    const teamspacePublicRoute = ()=>{
        navigate(`${getTeamspaceName}/${PATHS.PUBLIC}`);
    };
    const teamspacePrivateRoute = (channelIdx: number, channelName: string)=>{
        navigate(`${getTeamspaceName}/${PATHS.PRIVATE}?channel=${channelName}`, {state: channelIdx});
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