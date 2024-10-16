import { AlarmModal } from './alarmModal';
import { useLogout } from '../model/useLogout';

import { useRoute } from '@shared/hooks';
import { useDarkTheme } from '@shared/store/darkTheme';
import { useUrlTracking } from '@shared/store/urlTracking';
import { PATHS } from '@shared/consts/paths';
import { useModalEventDetect } from '@shared/hooks/useModalEventDetect';
import { FullScreenModal } from '@shared/ui';

export const Header = () => {
   const { theme, changeTheme } = useDarkTheme();
   const { loginRoute, teamspaceListRoute } = useRoute();
   const { getCurrentPathName } = useUrlTracking();
   const { modalRef, isModalDetect, onClickOpenModal } = useModalEventDetect();
   const { isLogout, onClickOpenLogoutModal } = useLogout();

   return (
      <div className="flex justify-start gap-3 whitespace-nowrap px-4 py-2">
         {/* Button list in header */}
         <div>
            <button
               className={`button-layout ${getCurrentPathName(PATHS.teamspaceList) ? '_active' : '_not-select'} sm:px-2 sm:py-2 sm:text-xs`}
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
            <button className="button-layout _not-select sm:px-2 sm:py-2 sm:text-xs" onClick={changeTheme}>
               {theme ? '라이트모드' : '다크모드'}
            </button>
         </div>
         <div>
            <button className="button-layout _not-select sm:px-2 sm:py-2 sm:text-xs" onClick={loginRoute}>
               로그인
            </button>
         </div>
         <div>
            <button className="button-layout _not-select sm:px-2 sm:py-2 sm:text-xs" onClick={onClickOpenLogoutModal}>
               로그아웃
            </button>
            <FullScreenModal title="테스트입니다" isModal={isLogout} closeModal={onClickOpenLogoutModal}>
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
            </FullScreenModal>
         </div>
      </div>
   );
};
