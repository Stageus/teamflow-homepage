// package
import { useMatch } from 'react-router-dom';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
// slice
import { useChangeTheme } from './model/useChangeTheme';
import { useAlarm } from './model/useAlarm';
import { useLogout } from './model/useLogout';
import { AlarmModal } from './ui/alarmModal';
// layer
import { useRoute } from '@/shared/hooks/useRoute';
import { PATHS } from '@/shared/consts/paths';
import { Button } from '@/shared/ui/Button';
import { FullScreenModal } from '@/shared/ui/FullScreenModal';

export const Header = ( props: {toggleTestAside: () => void} ) => {
   const {toggleTestAside} = props;
   const currentUrl = useMatch(`/${PATHS.teamSpaceList}`);
   const isSameUrl = currentUrl.pathname === `/${PATHS.teamSpaceList}`;

   const { teamspaceListRoute } = useRoute();
   const { theme, toggleTheme } = useChangeTheme();
   const { alarmRef, isAlarmModal, toggleAlarmModal } = useAlarm();
   const { isLogoutModal, toggleLogoutModal, handelrLogout } = useLogout();



   return (
      <div className="flex gap-3 px-4 py-2 whitespace-nowrap">
         {/* 모바일 화면 햄버거 버튼 */}
         <div
            className="flex items-center mx-3 cursor-pointer hover:theme-hover-text md:hidden text-gray"
            // onClick={toggleAside}>
            onClick={toggleTestAside}>
            <HamburgerMenuIcon className="h-7 w-7" />
         </div>
         {/* Teamspace 이동 버튼 */}
         <Button variant={isSameUrl ? 'select' : 'default'} onClick={teamspaceListRoute}>
            TeamSpace
         </Button>
         {/* ____ 알람버튼 및 모달*/}
         <div ref={alarmRef} className="relative">
            <Button variant={isAlarmModal ? 'select' : 'default'} onClick={toggleAlarmModal}>
               알람
            </Button>
            {isAlarmModal ? <AlarmModal /> : null}
         </div>
         {/* _____ 테마변경 버튼 */}
         <Button variant="default" onClick={toggleTheme}>
            {theme ? '라이트모드' : '다크모드'}
         </Button>
         {/* _____ 로그아웃 버튼 */}
         <Button variant="default" onClick={toggleLogoutModal}>
            로그아웃
         </Button>

         {/* 로그아웃 모달 */}
         <FullScreenModal title="logout" closeModal={toggleLogoutModal} variant={isLogoutModal ? 'show' : 'hide'}>
            <div className="flex flex-col gap-8">
               <h2 className="text-white">로그아웃 하시겠습니까?</h2>
               <div className="flex gap-5">
                  <Button variant="danger" onClick={handelrLogout}>
                     로그아웃
                  </Button>
                  <Button variant="default" onClick={toggleLogoutModal}>
                     되돌아가기
                  </Button>
               </div>
            </div>
         </FullScreenModal>
      </div>
   );
};
