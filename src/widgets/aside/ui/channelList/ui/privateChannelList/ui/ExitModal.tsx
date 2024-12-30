// package
import * as React from 'react';

// layer
import { FullScreenModal } from '@/shared/ui/FullScreenModal';
import { Button } from '@/shared/ui/Button';
import { PrivatechannelContext } from '@/shared/context/privateChannelContext';

export const ExitModal = ( props: ExitModalProps) => {
   const { privateChannel, removePrivateChannel } = React.useContext(PrivatechannelContext);

   return (
      <FullScreenModal
         title="채널나가기"
         variant={ props.isOpenExitModal ? 'show' : 'hide'}
         closeModal={removePrivateChannel}>
         <div className="flex w-[300px] flex-col items-center gap-6">
            <h2 className="text-white whitespace-nowrap">{`정말 ${privateChannel?.name} 을 나가겠습니까?`}</h2>
            <div className="flex gap-3">
               <Button variant="danger" onClick={() => console.log('채널나가기 동작')}>
                  나가기
               </Button>
               <Button variant="default" onClick={props.setIsOpenExitModal}>
                  취소
               </Button>
            </div>
         </div>
      </FullScreenModal>
   );
};

type ExitModalProps = {
   isOpenExitModal: boolean;
   setIsOpenExitModal: () => void;
}
