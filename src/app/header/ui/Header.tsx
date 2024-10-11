import { BsXLg } from 'react-icons/bs';
import { AlarmModal } from './alarmModal';
import { LogoutModal } from './logoutModal';
import { useLogout } from '../model/useLogout';

import { useRoute } from '@shared/hooks';
import { useDarkTheme } from '@shared/store/darkTheme';
import { useUrlTracking } from '@shared/store/urlTracking';
import { PATHS } from '@shared/consts/paths';
import { useModalEventDetect } from '@shared/hooks/useModalEventDetect';

export const Header = () => {
   const { theme, changeTheme } = useDarkTheme();
   const { loginRoute, teamspaceListRoute } = useRoute();
   const { getCurrentPathName } = useUrlTracking();
   const { modalRef, isModalDetect, onClickOpenModal } = useModalEventDetect();
   const { isLogout, onClickOpenLogoutModal } = useLogout();

   return (
      <div className="flex justify-start gap-3 px-4 py-2">
         <div>
            <button
               className={`button-layout ${getCurrentPathName(PATHS.teamspaceList) ? 'button-type-active' : 'button-type-not'}`}
               onClick={teamspaceListRoute}>
               TeamSpace
            </button>
         </div>
         <div ref={modalRef}>
            <button
               className={`button-layout ${isModalDetect ? 'button-type-active' : 'button-type-not'}`}
               onClick={onClickOpenModal}>
               알람
            </button>
            {isModalDetect ? <AlarmModal /> : null}
         </div>
         <div>
            <button className="button-layout button-type-not" onClick={changeTheme}>
               {theme ? '라이트모드' : '다크모드'}
            </button>
         </div>
         <div>
            <button className="button-layout button-type-not" onClick={loginRoute}>
               로그인
            </button>
         </div>
         <div>
            <button className="button-layout button-type-not" onClick={onClickOpenLogoutModal}>
               로그아웃
            </button>
            <div className={`full-screen-modal ${isLogout ? 'full-screen-modal-show' : 'full-screen-modal-hidden'}`}>
               <div
                  onClick={onClickOpenLogoutModal}
                  className="absolute right-5 top-5 flex h-[50px] w-[50px] cursor-pointer items-center justify-end text-primary-black dark:text-primary-white">
                  <BsXLg size={'30'} />
               </div>
               <h1 className="flex items-center justify-center px-5">Logout</h1>
               <div className="flex grow items-center justify-center">
                  {isLogout ? <LogoutModal cancell={onClickOpenLogoutModal} /> : null}
               </div>
            </div>
         </div>
      </div>
   );
};
