import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Test } from '@pages/Test';
import { Login } from '@pages/login';
import { SignUp } from '@pages/signup';
import { TeamSpaceList } from '@pages/teamspaceList';
import { PATHS } from '@shared/consts/paths';
import { TeamSpace } from '@pages/teamspace';

export const Router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route path="/" element={<Layout />}>
         <Route path="test" element={<Test />} />
            <Route path={PATHS.login} element={<Login />} />
            <Route path={PATHS.signup} element={<SignUp />} />
            <Route path={PATHS.teamspaceList} element={<TeamSpaceList />} />

            <Route path={`${PATHS.teamspace}/:teamspace_name`}>
               <Route index element={<TeamSpace />} />
               <Route path={PATHS.public} element={<div>특정 TeamSpace 공개 채널페이지</div>} />
               <Route path={`${PATHS.private}/:channel_name`} element={<div>특정 TeamSpace 비공개 채널페이지</div>} />
            </Route>
            {/* 
               현재 상대경로를 기준으로 두가지의 방법이 있다.
               1. useNavigate의 relative를 사용해서 상대경로 기준 생성하는 방법
               2. useResolvedPath를 사용해서 상대적 경로를 가져오는 방법

               위 2가지 방법을 사용했지만 1번째 방법은, 감싸고 있는 부모기준을 root로 인식을하여 감싸는 부모를 찾지못하고,
               2번째 방법은 인자를 전달하였지만, 이전 경로를 인식하지 못하고 있다. 즉 구조적인 문제로 판단한다
               확인이 필요
            */}
         </Route>
      </>,
   ),
);
