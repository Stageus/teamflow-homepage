import { useMatch } from "react-router-dom";
import { BsList } from 'react-icons/bs';

import { AlarmModal } from './ui/alarmModal';
import { useChangeTheme } from './model/useChangeTheme';
import { useLogout } from './model/useLogout';
import { useModalEventDetect } from './model/useModalEventDetect';

import { useRoute } from '@shared/hooks/useRoute';
import { FullScreenModal } from '@shared/ui/FullScreenModal';
import { useCookie } from '@shared/hooks/useCookie';
import { PATHS } from "@shared/consts/paths";

export const Header = () => {
   const { loginRoute, teamspaceListRoute } = useRoute();
   const { modalRef, isModalDetect, onClickOpenModal } = useModalEventDetect();
   const { isLogout, onClickOpenLogoutModal } = useLogout();
   const { theme, onClickchangeTheme } = useChangeTheme();
   const { cookies, removeCookieName } = useCookie('token');
   const match = useMatch(`/${PATHS.teamSpaceList}`);
   
   return (
      <div className="flex gap-3 px-4 py-2 whitespace-nowrap">
         <div className="hidden mx-3 hover:theme-hover-text h-7 w-7 text-gray mobile:block">
            <BsList size={"100%"}></BsList>
         </div>
         {/* Button list in header */}
         <div>
            <button
               className={`button-layout ${match?.pathname.includes(PATHS.teamSpaceList) ? '_active' : '_not-select'} sm:px-2 sm:py-2 sm:text-xs`}
               onClick={teamspaceListRoute}>
               TeamSpace
            </button>
         </div>
         <div ref={modalRef} className="relative">
            <button
               className={`button-layout ${isModalDetect ? '_active' : '_not-select'} sm:px-2 sm:py-2 sm:text-xs`}
               onClick={onClickOpenModal}>
               알람
            </button>
            {isModalDetect ? <AlarmModal /> : null}
         </div>
         <div>
            <button className="button-layout _not-select sm:px-2 sm:py-2 sm:text-xs" onClick={onClickchangeTheme}>
               {theme ? '라이트모드' : '다크모드'}
            </button>
         </div>

         <div>
            {cookies.token ? (
               <button
                  className="button-layout _not-select sm:px-2 sm:py-2 sm:text-xs"
                  onClick={onClickOpenLogoutModal}>
                  로그아웃
               </button>
            ) : (
               <button className="button-layout _not-select sm:px-2 sm:py-2 sm:text-xs" onClick={loginRoute}>
                  로그인
               </button>
            )}
         </div>
         {/* <FullScreenModal title="Logout" isModal={isLogout} closeModal={onClickOpenLogoutModal}>
            <div className="flex flex-col gap-8">
               <h2 className="text-white">로그아웃 하시겠습니까?</h2>
               <div className="flex gap-5">
                  <button
                     className="button-layout _danger"
                     onClick={() => {
                        removeCookieName('token');
                        loginRoute();
                     }}>
                     로그아웃
                  </button>
                  <button className="button-layout _default" onClick={onClickOpenLogoutModal}>
                     되돌아가기
                  </button>
               </div>
            </div>
         </FullScreenModal> */}
      </div>
   );
};
