// package
import * as React from 'react';
import { ExitIcon, GearIcon } from '@radix-ui/react-icons';
// slice
import { ExitModal } from './ui/exitModal';
// Layer
import { ToolTip } from '@/shared/ui/ToolTip';
import { useRoute } from '@/shared/hooks/useRoute';
import { useToggle } from '@/shared/hooks/useToggle';
import { cn } from '@/shared/lib/cn';
import { PrivatechannelContext } from '@/shared/context/privateChannelContext';

export const PrivateChannelItem = (props: PrivateChannelProps) => {
   const { teamspacePrivateRoute } = useRoute();
   const [isOpenExitModal, setIsOpenExitModal] = useToggle(false);
   const [isOpenSettingModal, setIsOpenSettingModal] = useToggle(false);
   const { privateChannelKey, savePrivateChannelKey } = React.useContext(PrivatechannelContext);

   return (
      <>
         <li
            key={props.channelIdx}
            className={cn('flex cursor-pointer flex-col gap-2 rounded-lg p-2 text-shade_5 hover:bg-shade_3', {
               'bg-shade_3': privateChannelKey === props.channelIdx && isOpenSettingModal,
            })}>
            <div className="flex items-start">
               <div className="grow hover:text-primary" onClick={() => teamspacePrivateRoute(props.channelName)}>
                  <p className="max-w-[178px] truncate text-sm">{props.channelName}</p>
               </div>
               <div className="flex gap-3 text-black dark:text-white">
                  <ToolTip toolTipContent="채널 나가기" place="right">
                     <div className="w-4 h-4 hover:text-primary" onClick={setIsOpenExitModal}>
                        <ExitIcon className="w-full h-full" />
                     </div>
                  </ToolTip>
                  <ToolTip toolTipContent="채널 설정" place="right">
                     <div
                        className="w-4 h-4 hover:text-primary"
                        onClick={() => {
                           savePrivateChannelKey(props.channelIdx);
                           setIsOpenSettingModal();
                        }}>
                        <GearIcon className="w-full h-full" />
                     </div>
                  </ToolTip>
               </div>
            </div>
            {privateChannelKey === props.channelIdx && isOpenSettingModal && (
               <div className={`flex justify-around`}>
                  <span className="hover:text-primary">이름변경</span>
                  <span className="hover:text-primary">추방</span>
                  <span className="hover:text-primary">초대</span>
                  <span className="hover:text-primary">삭제</span>
               </div>
            )}
         </li>
         {/* 채널 나가기 모달 */}
         <ExitModal isOpenExitModal={isOpenExitModal} setIsOpenExitModal={setIsOpenExitModal} />
         {/* 비공개 채널 나가기 모달 */}
         {/* 비공개 채널 이름변경 모달 */}
         {/* 비공개 채널 초대 모달  */}
         {/* 비공개 채널 추방 모달 */}
         {/* 비공개 채널 삭제 모달 */}
      </>
   );
};

type PrivateChannelProps = {
   channelIdx: number;
   channelName: string;
};
