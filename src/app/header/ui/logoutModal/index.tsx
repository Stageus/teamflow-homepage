import { LogoutModalProps } from "../../types";
import { DefaultButton } from '@shared/ui';
import { useRoute } from "@shared/hooks";

export const LogoutModal = ( props: LogoutModalProps ) => {
    const { cancell } = props;
    const { loginRoute } = useRoute();
   return (
      <div>
         <h2 className='p-5'>로그아웃 하시겠습니까?</h2>
         <div className='flex gap-5'>
            <DefaultButton text="로그아웃" type="danger" onClick={loginRoute} />
            <DefaultButton text="취소" type="default" onClick={cancell} />
         </div>
      </div>
   );
};
