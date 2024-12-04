// package
import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
// slice
import { AlarmModal } from './ui/alarmModal';
import { useChangeTheme } from './model/useChangeTheme';
import { useModalEventDetect } from './model/useModalEventDetect';
import { LogoutModal } from './ui/logoutModal';
// layer
import { useRoute } from '@/shared/hooks/useRoute';
import { PATHS } from '@/shared/consts/paths';
import { Button } from '@/shared/ui/Button';

export const Header = () => {
   const currentUrl = useMatch(`/${PATHS.teamSpaceList}`);
   const isSameUrl = currentUrl.pathname === `/${PATHS.teamSpaceList}`;

   const { teamspaceListRoute } = useRoute();
   const { theme, toggleTheme } = useChangeTheme();

   const { modalRef, isModalDetect, toggleAlarmModal } = useModalEventDetect();

   const [logoutModal, setIsLogoutModal] = useState(false);
   const toggleLogoutModal = () => setIsLogoutModal(!logoutModal);

   return (
      <div className="flex gap-3 px-4 py-2 whitespace-nowrap">
         {/* 메뉴 버튼 */}
         <div className="flex items-center mx-3 hover:theme-hover-text text-gray">
            <HamburgerMenuIcon className='h-7 w-7'/>
         </div>
         <Button variant={isSameUrl ? 'select' : 'default'} onClick={teamspaceListRoute}>
            TeamSpace
         </Button>
         <div ref={modalRef} className='relative'>
            <Button variant={ isModalDetect ? 'select' : 'default'} onClick={toggleAlarmModal}>
               알람
            </Button>
            {isModalDetect ? <AlarmModal /> : null}
         </div>
         <Button variant="default" onClick={toggleTheme}>
            {theme ? '라이트모드' : '다크모드'}
         </Button>
         <Button variant="default" onClick={toggleLogoutModal}>
            로그아웃
         </Button>
         {/* 로그아웃 모달 */}
         <LogoutModal isModal={logoutModal} closeModal={toggleLogoutModal} />
      </div>
   );
};
