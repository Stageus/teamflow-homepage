// Layer
import { useValidation } from '@/shared/hooks/useValidation';
import { Input } from '@/shared/ui/Input';
import { channelRegexp } from '@/shared/consts/regExp';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/Button';
import { FullScreenModal } from '@/shared/ui/FullScreenModal';

const CreatePrivateChannelModal = (props: CreatePrivateChannelModalProps) => {
   const { inputRef: privateChannelRef, validationResult, isCheckValidation } = useValidation(channelRegexp);
   return (
      <FullScreenModal
         title="비공개 채널생성"
         closeModal={props.closeModal}
         variant={props.isOpenModal ? 'show' : 'hide'}>
         {props.isOpenModal ? (
            <div className="flex w-[300px] flex-col gap-3">
               <h2 className="text-white">어떤 그룹을 만들생각인가요?</h2>
               <Input
                  ref={privateChannelRef}
                  onChange={isCheckValidation}
                  placeholder="비공개 채널이름"
                  className={cn(
                     'text-white',
                     { 'border-success': validationResult === true },
                     { 'border-error': validationResult === false },
                  )}
               />
               <p
                  className={`text-sm ${validationResult !== null && validationResult ? 'text-success' : 'text-error'} h-3`}>
                  {validationResult !== null && (validationResult ? '사용가능합니다' : '5글자 이상 ~ 20글자 이하')}
               </p>
               <div className="flex justify-center gap-3 py-2">
                  <Button
                     variant={validationResult ? 'select' : 'disabeld'}
                     onClick={() => validationResult && console.log(privateChannelRef.current?.value)}>
                     채널생성
                  </Button>
                  <Button variant="default" onClick={props.closeModal}>
                     취소
                  </Button>
               </div>
            </div>
         ) : null}
      </FullScreenModal>
   );
};

export { CreatePrivateChannelModal };

type CreatePrivateChannelModalProps = {
   isOpenModal: boolean;
   closeModal: () => void;
};
