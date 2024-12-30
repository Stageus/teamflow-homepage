// package
import * as React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ExitIcon, GearIcon, CrossCircledIcon } from '@radix-ui/react-icons';
// Layer
import { ToolTip } from '@/shared/ui/ToolTip';
import { useRoute } from '@/shared/hooks/useRoute';
import { cn } from '@/shared/lib/cn';
import { PrivatechannelContext } from '@/shared/context/privateChannelContext';

export const Item = (props: PrivateChannelProps) => {
   const { teamspacePrivateRoute } = useRoute();
   const location = useLocation();
   const { savePrivateChannel, removePrivateChannel } = React.useContext(PrivatechannelContext);

   return (
      <li
         className={cn('flex cursor-pointer flex-col gap-2 rounded-lg p-2 text-shade_5 hover:bg-shade_3', {
            'bg-shade_3': location.state === props.channelIdx,
         })}
         onClick={() => savePrivateChannel(props.channelIdx, props.channelName)}>
         <div className="flex items-start">
            <div className="text-sm grow" onClick={() => teamspacePrivateRoute(props.channelIdx, props.channelName)}>
               <p className="max-w-[178px] truncate hover:text-primary">{props.channelName}</p>
            </div>
            <div className="flex gap-3 text-black dark:text-white">
               <ToolTip toolTipContent="채널 설정" place="right">
                  <div
                     className="w-4 h-4 hover:text-primary"
                     onClick={() => savePrivateChannel(props.channelIdx, props.channelName)}>
                     <GearIcon className="w-full h-full" />
                  </div>
               </ToolTip>
               <ToolTip toolTipContent="채널 나가기" place="right">
                  <div
                     className="w-4 h-4 hover:text-primary"
                     onClick={() => savePrivateChannel(props.channelIdx, props.channelName)}>
                     <ExitIcon className="w-full h-full" />
                  </div>
               </ToolTip>
            </div>
         </div>
      </li>
   );
};

type PrivateChannelProps = {
   channelIdx: number;
   channelName: string;
};
