import { FullScreenModal } from '@/shared/ui/FullScreenModal';
import { Button } from '@/shared/ui/Button';

export const ExitModal = ( props: ExitModalProps ) => {

    return(
        <FullScreenModal
            title="채널나가기"
            variant={props.isOpenExitModal ? 'show' : 'hide'}
            closeModal={props.setIsOpenExitModal}>
            <div className="flex w-[300px] flex-col items-center gap-6">
               <h2 className="text-white whitespace-nowrap">{'정말 (채널이름) 을 나가겠습니까?'}</h2>
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
}

type ExitModalProps = {
    isOpenExitModal: boolean;
    setIsOpenExitModal: () => void;
}