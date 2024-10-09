import { AlarmModal } from "./alarmModal";
import { LogoutModal } from "./logoutModal";
import { useLogout } from "../model/useLogout";

import { useRoute } from "@shared/hooks";
import { useDarkTheme } from "@shared/store/darkTheme";
import { useUrlTracking } from "@shared/store/urlTracking";
import { FullScreenModal } from '@shared/ui';
import { PATHS } from "@shared/consts/paths";
import { useModalEventDetect } from "@shared/hooks/useModalEventDetect";


export const Header = () => {
   const { theme, changeTheme } = useDarkTheme();
   const { loginRoute, teamspaceListRoute } = useRoute();
   const { getCurrentPathName } = useUrlTracking();
   const { modalRef, isModalDetect, onClickOpenModal } = useModalEventDetect();
   const { isLogout, onClickOpenLogoutModal} = useLogout();   
   return (
      <div className="flex gap-3 px-4 py-2 justify-start">
         <div>
            <button className={`button-layout ${getCurrentPathName(PATHS.teamspaceList) ? "button-type-active" : "button-type-not"}`} onClick={teamspaceListRoute}>TeamSpace</button>
         </div>
         <div ref={modalRef}>
            <button className={`button-layout ${isModalDetect ? "button-type-active" : "button-type-not"}`} onClick={onClickOpenModal}>알람</button>
            {isModalDetect ? <AlarmModal/> : null}
         </div>
         <div>
            <button className='button-layout button-type-not' onClick={changeTheme}>{theme ? "라이트모드" : "다크모드"}</button>
         </div>
         <div>
            <button className='button-layout button-type-not' onClick={loginRoute}>로그인</button>
         </div>
         <div>
         <button className='button-layout button-type-not' onClick={onClickOpenLogoutModal}>로그아웃</button>
            <FullScreenModal close={onClickOpenLogoutModal} title="Logout">{isLogout ? <LogoutModal cancell={onClickOpenLogoutModal}/> : null}</FullScreenModal>
         </div>
      </div>
   );
};
