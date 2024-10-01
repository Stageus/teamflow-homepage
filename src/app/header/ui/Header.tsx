import { DefaultButton } from '@shared/ui';
export const Header = () => {
   return (
      <div className="flex gap-3 px-4 py-2 justify-start">
         <div>
            <DefaultButton text="TeamSpace" onClick={() => console.log('TeamSpace 선택페이지')} />
         </div>
         <div>
            <DefaultButton type="notSelected" text="알림" onClick={() => console.log('알림 모달창')} />
         </div>
         <div>
            <DefaultButton type="active" text="테마" onClick={() => console.log('테마변경')} />
         </div>
         <div>
            <DefaultButton type="disabled" text="로그아웃" onClick={() => console.log('로그아웃 모달창')} />
         </div>
         <div>
            <DefaultButton type="danger" text="로그아웃" onClick={() => console.log('로그아웃 모달창')} />
         </div>
      </div>
   );
};
