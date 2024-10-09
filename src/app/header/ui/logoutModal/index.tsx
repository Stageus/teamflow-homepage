import { LogoutModalProps } from "../../types";
import { useRoute } from "@shared/hooks";

export const LogoutModal = ( props: LogoutModalProps ) => {
    const { cancell } = props;
    const { loginRoute } = useRoute();
   return (
      <div>
         <h2 className='p-5'>로그아웃 하시겠습니까?</h2>
         <div className='flex gap-5'>
            <button className="button-layout button-type-danger" onClick={loginRoute}>로그아웃</button>
            <button className="button-layout button-type-default" onClick={cancell}>되돌아가기</button>
         </div>
      </div>
   );
};
