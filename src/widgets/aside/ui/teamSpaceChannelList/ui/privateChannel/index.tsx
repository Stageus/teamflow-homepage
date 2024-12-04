import { useState } from 'react';
import { produce } from 'immer';
// import { BsBoxArrowInRight, BsGearFill } from 'react-icons/bs';
import { ToolTip } from '@/shared/ui/ToolTip';
import { useRoute } from '@/shared/hooks/useRoute';
import { FullScreenModal } from '@/shared/ui/FullScreenModal';

interface ToogleStateObject {
   outside: boolean;
   setting: boolean;
}

type UiStateKeys = keyof ToogleStateObject;

interface PrivateChannelProps {
   channelIdx: number;
   channelName: string;
}

export const PrivateChannel = (props: PrivateChannelProps) => {
   const { channelIdx, channelName } = props;
   const { teamspacePrivateRoute } = useRoute();

   const [toogleState, setToogleState] = useState<ToogleStateObject>({
      outside: false,
      setting: false,
   });

   const channgeToggleState = (key: UiStateKeys) => {
      setToogleState(
         produce(draft => {
            draft[key] = !draft[key];
         }),
      );
   };

   return (
      <>
         <li
            key={channelIdx}
            className="flex flex-col gap-1 p-2 rounded-lg cursor-pointer item s-center text-shade_5 hover:bg-shade_3">
            <div className="flex items-start">
               <div className="grow hover:text-primary" onClick={() => teamspacePrivateRoute(channelName)}>
                  <p className="max-w-[178px] truncate text-sm">{channelName}</p>
               </div>
               <div className="flex gap-3 text-black dark:text-white">
                  <ToolTip toolTipContent="채널 나가기">
                     <div className="w-4 h-4 hover:text-primary" onClick={() => channgeToggleState('outside')}>
                        {/* <BsBoxArrowInRight size={'100%'} /> */}
                     </div>
                  </ToolTip>
                  <ToolTip toolTipContent="채널 설정">
                     <div className="w-4 h-4 hover:text-primary" onClick={() => channgeToggleState('setting')}>
                        {/* <BsGearFill size={'100%'} /> */}
                     </div>
                  </ToolTip>
               </div>
            </div>
            {toogleState.setting && (
               <div className={`flex justify-around`}>
                  <span>이름변경</span>
                  <span>초대</span>
                  <span>추방</span>
                  <span>삭제</span>
               </div>
            )}
         </li>
         {/* 채널 나가기 모달 */}
         <FullScreenModal
            title="채널나가기"
            // isModal={toogleState.outside}
            closeModal={() => channgeToggleState('outside')}>
            <div className="flex w-[300px] flex-col items-center gap-6">
               <h2 className="text-white whitespace-nowrap">{'정말 (채널이름) 을 나가겠습니까?'}</h2>
               <div className="flex gap-3">
                  <button className="button-layout _danger" onClick={() => console.log('채널나가기 동작')}>
                     나가기
                  </button>
                  <button className="button-layout _default" onClick={() => channgeToggleState('outside')}>
                     취소
                  </button>
               </div>
            </div>
         </FullScreenModal>
      </>
   );
};
