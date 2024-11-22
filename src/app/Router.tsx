import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthLayout } from './layout/authLayout';
import { GuestLayout } from './layout/guestLayout';
import { Login } from '@pages/login';
import { SignUp } from '@pages/signup';
import { TeamSpaceList } from '@pages/teamspaceList';
import { PATHS } from '@shared/consts/paths';
import { TeamSpace } from '@pages/teamspace';

const authLoader = () => {
   // 유저 여부 체크에 따른 리다이렉트
   return "";
 };

export const Router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route path="/" loader={authLoader}>
            {/* 비인증 페이지 */}
            <Route element={<GuestLayout />}>
               <Route path={PATHS.login} element={<Login />} />
               <Route path={PATHS.signup} element={<SignUp />} />
            </Route>
            {/* 인증 페이지 */}
            <Route element={<AuthLayout />}>
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
      </>,
   ),
);
