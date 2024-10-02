import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Test } from "@pages/Test";
import { PATHS } from "@shared/consts/paths";

export const Router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout/>}>
            <Route path="test" element={<Test/>}/>
            <Route path={PATHS.login} element={<div>로그인</div>}/>
            <Route path={PATHS.signup} element={<div>회원가입</div>}/>
            <Route path={PATHS.teamspaceList} element={<div>TeamSpace 선택페이지</div>}/>
            <Route path={`${PATHS.teamspace}/:team-space_name`}>
                <Route index element={<div>특정 TeamSpace 공지 채널페이지</div>}/>
                <Route path={PATHS.public} element={<div>특정 TeamSpace 공개 채널페이지</div>}/>
                <Route path={`${PATHS.private}/:channel_name`} element={<div>특정 TeamSpace 비공개 채널페이지</div>}/>
            </Route>
        </Route>
    </>
))