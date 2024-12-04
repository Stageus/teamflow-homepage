// package
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// slice
import { AuthLayout } from './ui/authLayout';
import { Theme } from './ui/theme';
// layer
import { Login } from '@/pages/login';
import { SignUp } from '@/pages/signup';
import { TeamSpaceList } from '@/pages/teamspaceList';
import { PATHS } from '@/shared/consts/paths';
import { TeamSpace } from '@/pages/teamspace';

export const Router = createBrowserRouter(
   createRoutesFromElements(
         <Route path="/" element={<Theme/>} errorElement={<div>잘못된 경로의 들어선경우 컴포넌트</div>}>
            <Route index element={<Login />}/>
            <Route path={PATHS.signup} element={<SignUp />} />
            <Route element={<AuthLayout />} errorElement={<div>인증된 사용자만 접근 가능</div>} loader={()=> { console.log("사용자권한 요청"); return ""}}>
               <Route path={PATHS.teamSpaceList} element={<TeamSpaceList />} />
               <Route path={`${PATHS.teamSpace}/:${PATHS.teamSpaceName}`}>
                  <Route index element={<TeamSpace />} />
                  <Route path={PATHS.public} element={<div>특정 TeamSpace 공개 채널페이지</div>} />
                  <Route
                     path={`${PATHS.private}/:${PATHS.channelName}`}
                     element={<div>특정 TeamSpace 비공개 채널페이지</div>}
                  />
               </Route>
            </Route>
         </Route>
   ),
);
