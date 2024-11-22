import { FullScreenModal } from '@shared/ui/FullScreenModal';
import { useRoute } from '@shared/hooks/useRoute';
import { useCookie } from "@shared/hooks/useCookie";

interface LogoutModalProps {
    isModal: boolean;
    closeModal: () => void;
}

export const LogoutModal = ( props: LogoutModalProps ) => {
    
   const { loginRoute } = useRoute();
   const { isModal, closeModal } = props

   const { removeCookieName } = useCookie('token');
   const onClickLogout = () => {
    removeCookieName('token');
    loginRoute();
   }

   return (
      <FullScreenModal title="Logout" closeModal={closeModal}>
         {isModal ? (
            <div className="flex flex-col gap-8">
               <h2 className="text-white">로그아웃 하시겠습니까?</h2>
               <div className="flex gap-5">
                  <button
                     className="button-layout _danger"
                     onClick={onClickLogout}>
                     로그아웃
                  </button>
                  <button className="button-layout _default" onClick={closeModal}>
                     되돌아가기
                  </button>
               </div>
            </div>
         ) : null}
      </FullScreenModal>
   );
};
