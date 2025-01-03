// package
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// slice
import { Layout } from './layout';
// layer
import { PATHS } from '@/shared/consts/paths';
// React Fast Refresh 참고
const Login = lazy(() => import('@/pages/login'));
const NotFound = lazy(() => import('@/pages/error/NotFound'));
const SignUp = lazy(() => import('@/pages/login'));
const TeamSpaceList = lazy(() => import('@/pages/teamspaceList'));
const NoticeChannel = lazy(() => import('@/pages/noticeChannel'));
const PublicChannel = lazy(() => import('@/pages/publicChannel'));
const PrivateChannel = lazy(() => import('@/pages/privateChannel'));

export const routes = createBrowserRouter([
   {
      path: '/',
      errorElement: <NotFound />,
      children: [
         {
            // 해당 부분은 token에 따른 리다이렉트 컴포넌로 변경 예정
            index: true,
            element: (
               <Suspense fallback={<div>Loading...</div>}>
                  <Login />
               </Suspense>
            ),
         },
         {
            children: [
               {
                  path: PATHS.LOGIN,
                  element: (
                     <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                     </Suspense>
                  ),
               },
               {
                  path: PATHS.SIGNUP,
                  element: (
                     <Suspense fallback={<div>Loading...</div>}>
                        <SignUp />
                     </Suspense>
                  ),
               },
            ],
         },
         {
            element: <Layout />,
            loader: async () => {
               console.log('사용자권한 요청');
               return '';
            },
            children: [
               {
                  path: PATHS.TEAMSPACELIST,
                  element: (
                     <Suspense fallback={<div>Loading...</div>}>
                        <TeamSpaceList />
                     </Suspense>
                  ),
               },
               {
                  path: PATHS.TEAMSPACENAME,
                  children: [
                     {
                        path: PATHS.NOTICE,
                        element: (
                           <Suspense fallback={<div>Loading...</div>}>
                              <NoticeChannel />
                           </Suspense>
                        ),
                     },
                     {
                        path: PATHS.PUBLIC,
                        element: (
                           <Suspense fallback={<div>Loading...</div>}>
                              <PublicChannel />
                           </Suspense>
                        ),
                     },
                     {
                        path: PATHS.PRIVATE,
                        element: (
                           <Suspense fallback={<div>Loading...</div>}>
                              <PrivateChannel />
                           </Suspense>
                        ),
                     },
                  ],
               },
            ],
         },
      ],
   },
]);
