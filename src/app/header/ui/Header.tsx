import { useRoute } from "@shared/hooks";
import { useDarkTheme } from "@shared/store/darkTheme";
import { DefaultButton } from '@shared/ui';
export const Header = () => {
   const { changeTheme } = useDarkTheme();
   const { loginRoute } = useRoute();
   return (
      <div className="flex gap-3 px-4 py-2 justify-start">
         <div>
            <DefaultButton type="notSelected" text="TeamSpace" onClick={() => console.log('TeamSpace 선택페이지')} />
         </div>
         <div>
            <DefaultButton type="notSelected" text="알림" onClick={() => console.log('알림 모달창')} />
         </div>
         <div>
            <DefaultButton type="notSelected" text="테마" onClick={changeTheme} />
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
