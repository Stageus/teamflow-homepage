import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { BsList } from 'react-icons/bs';

import { AlarmModal } from './ui/alarmModal';
import { useChangeTheme } from './model/useChangeTheme';
import { useModalEventDetect } from './model/useModalEventDetect';
import { LogoutModal } from './ui/logoutModal';

import { useRoute } from '@shared/hooks/useRoute';
import { useCookie } from '@shared/hooks/useCookie';
import { PATHS } from '@shared/consts/paths';

export const Header = () => {
   const { loginRoute, teamspaceListRoute } = useRoute();
   const { modalRef, isModalDetect, onClickOpenModal } = useModalEventDetect();
   const { theme, onClickchangeTheme } = useChangeTheme();
   const { cookies } = useCookie('token');
   const match = useMatch(`/${PATHS.teamSpaceList}`);

   const [logoutModal, setIsLogoutModal] = useState(false);
   const toggleLogoutModal = () => setIsLogoutModal(!logoutModal);

   return (
      <div className="flex gap-3 px-4 py-2 whitespace-nowrap">
         {/* 메뉴 버튼 */}
         <div className="hidden mx-3 hover:theme-hover-text h-7 w-7 text-gray mobile:block">
            <BsList size={'100%'}></BsList>
         </div>
         {/* TeamSpace 이동 버튼 */}
         <div>
            <button
               className={`button-layout ${match?.pathname.includes(PATHS.teamSpaceList) ? '_active' : '_not-select'} sm:px-2 sm:py-2 sm:text-xs`}
               onClick={teamspaceListRoute}>
               TeamSpace
            </button>
         </div>
         {/* 알람모달창 버튼 */}
         <div ref={modalRef} className="relative">
            <button
               className={`button-layout ${isModalDetect ? '_active' : '_not-select'} sm:px-2 sm:py-2 sm:text-xs`}
               onClick={onClickOpenModal}>
               알람
            </button>
            {isModalDetect ? <AlarmModal /> : null}
         </div>
         {/* 테마변경 버튼 */}
         <div>
            <button className="button-layout _not-select sm:px-2 sm:py-2 sm:text-xs" onClick={onClickchangeTheme}>
               {theme ? '라이트모드' : '다크모드'}
            </button>
         </div>
         {/* 로그인 & 로그아웃 버튼 */}
         <div>
            {cookies.token ? (
               <button
                  className="button-layout _not-select sm:px-2 sm:py-2 sm:text-xs"
                  onClick={toggleLogoutModal}>
                  로그아웃
               </button>
            ) : (
               <button className="button-layout _not-select sm:px-2 sm:py-2 sm:text-xs" onClick={loginRoute}>
                  로그인
               </button>
            )}
         </div>

         {/* 로그아웃 모달 */}
         <LogoutModal isModal={logoutModal} closeModal={toggleLogoutModal} />
      </div>
   );
};
