import { AlarmModal } from "./alarmModal";
import { useRoute } from "@shared/hooks";
import { useDarkTheme } from "@shared/store/darkTheme";
import { useUrlTracking } from "@shared/store/urlTracking";
import { DefaultButton } from '@shared/ui';
import { PATHS } from "@shared/consts/paths";
import { useModalEventDetect } from "@shared/hooks/useModalEventDetect";

export const Header = () => {
   const { theme, changeTheme } = useDarkTheme();
   const { loginRoute, teamspaceListRoute } = useRoute();
   const { getCurrentPathName } = useUrlTracking();
   const { modalRef, isModalDetect, onClickOpenModal } = useModalEventDetect();

   return (
      <div className="flex gap-3 px-4 py-2 justify-start">
         <div>
            <DefaultButton type={getCurrentPathName(PATHS.teamspaceList) ? "active" : "notSelected"} text="TeamSpace" onClick={teamspaceListRoute} />
         </div>
         <div ref={modalRef}>
            <DefaultButton type={ isModalDetect ? "active" : "notSelected"} text="알림" onClick={onClickOpenModal} />
            {isModalDetect ? <AlarmModal/> : null}
         </div>
         <div>
            <DefaultButton type="notSelected" text={theme ? "라이트모드" : "다크모드"} onClick={changeTheme} />
         </div>
         <div>
            <DefaultButton type="notSelected" text="로그인" onClick={loginRoute} />
         </div>
         <div>
            <DefaultButton type="notSelected" text="로그아웃" onClick={() => console.log('로그아웃 모달창')} />
         </div>         
      </div>
   );
};
