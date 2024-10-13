import { BsXLg } from 'react-icons/bs';
import { AlarmModal } from './alarmModal';
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
      <div className="flex justify-start gap-3 px-4 py-2 whitespace-nowrap">
         {/* Button list in header */}
         <div>
            <button
               className={`button-layout ${getCurrentPathName(PATHS.teamspaceList) ? '_active' : '_not-select'}`}
               onClick={teamspaceListRoute}>
               TeamSpace
            </button>
         </div>
         <div ref={modalRef} className='relative'>
            <button className={`button-layout ${isModalDetect ? '_active' : '_not-select'}`} onClick={onClickOpenModal}>
               알람
            </button>
            {isModalDetect ? <AlarmModal /> : null}
         </div>
         <div>
            <button className="button-layout _not-select" onClick={changeTheme}>
               {theme ? '라이트모드' : '다크모드'}
            </button>
         </div>
         <div>
            <button className="button-layout _not-select" onClick={loginRoute}>
               로그인
            </button>
         </div>
         <div>
            <button className="button-layout _not-select" onClick={onClickOpenLogoutModal}>
               로그아웃
            </button>
            {/* Logout modal */}
            <div className={`full-screen-modal ${isLogout ? '_show' : '_hidden'}`}>
               <h1 className='title'>Logout</h1>
               <div
                  onClick={onClickOpenLogoutModal}
                  className="absolute right-5 top-5 flex h-[25px] w-[25px] cursor-pointer items-center justify-end text-white hover:text-secondary">
                  <BsXLg size={'100%'} />
               </div>
               <div className="flex grow items-center justify-center">
                  {isLogout ? (
                     <div>
                        <h2 className="title_sub">로그아웃 하시겠습니까?</h2>
                        <div className="flex gap-5">
                           <button className="button-layout _danger" onClick={loginRoute}>
                              로그아웃
                           </button>
                           <button className="button-layout _default" onClick={onClickOpenLogoutModal}>
                              되돌아가기
                           </button>
                        </div>
                     </div>
                  ) : null}
               </div>
            </div>
         </div>
      </div>
   );
};
