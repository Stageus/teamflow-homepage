import { useValidation } from '@/shared/hooks/useValidation';
import { Input } from '@/shared/ui/Input';
import { channelRegexp } from '@/shared/consts/regExp';
import { cn } from '@/shared/lib/cn';

const CreatePrivateChannelModal = ( props: CreatePrivateChannelModalProps ) => {
   const { inputRef: privateChannelRef, validationResult, isCheckValidation } = useValidation(channelRegexp);
   return (
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
         <p className={`text-sm ${validationResult !== null && validationResult ? 'text-success' : 'text-error'} h-3`}>
            {validationResult !== null && (validationResult ? '사용가능합니다' : '5글자 이상 ~ 20글자 이하')}
         </p>
         <div className="flex justify-center gap-3 py-2">
            <div>
               <button
                  className={`button-layout ${validationResult ? '_active' : '_disabled'}`}
                  onClick={() => console.log(privateChannelRef.current?.value)}>
                  채널생성
               </button>
            </div>
            <div>
               <button className="button-layout _default" onClick={props.closeModal}>
                  취소
               </button>
            </div>
         </div>
      </div>
   );
};

export { CreatePrivateChannelModal };


type CreatePrivateChannelModalProps = {
    closeModal: () => void;
}