import {
   BsArrowDownCircle,
   BsFillPlusCircleFill,
   BsBoxArrowInRight,
   BsGearFill,
   BsArrowUpCircle,
} from 'react-icons/bs';
import { useRoute } from '@shared/hooks';
import { useState } from 'react';

export const TeamSpcaeChannel = () => {
   const { teamspaceRoute, teamspacePublicRoute, teamspacePrivateRoute } = useRoute();
   const [channelList, setChannelList] = useState(false);
   const onClickShowList = () => setChannelList(!channelList);

   return (
      <div className="flex h-full gap-3 p-2">
         <div className="flex w-full min-w-[50px] max-w-[100px] shrink grow flex-col gap-3 overflow-y-scroll">
            <button className="bg-shade_4 hover:bg-primary min-h-[50px] w-full truncate rounded-full p-2 text-sm text-white">
               TeamSpace1
            </button>
         </div>

         <div className="bg-shade_2 flex min-w-[172px] grow flex-col gap-2 overflow-y-scroll rounded-lg p-1">
            <div
               className="text-shade_5 hover:text-primary hover:bg-shade_3 flex h-10 cursor-pointer items-center rounded-lg p-2"
               onClick={() => teamspaceRoute('teamspaceName')}>
               <span>공지 채널</span>
            </div>

            <div
               className="text-shade_5 hover:text-primary hover:bg-shade_3 flex h-10 cursor-pointer items-center rounded-lg p-2"
               onClick={() => teamspacePublicRoute('teamspaceName')}>
               <span>공개 채널</span>
            </div>

            <div className="text-shade_5 hover:text-primary flex h-10 cursor-pointer items-center justify-between rounded-lg p-2">
               <div className='flex grow items-center gap-3' onClick={onClickShowList}>
                  <span >
                     비공개 채널
                  </span>
                  <span className='w-5 h-5'>{channelList ? <BsArrowUpCircle size={'100%'} /> : <BsArrowDownCircle size={'100%'} />}</span>
               </div>
               <span className="h-5 w-5"></span>
               <span className="text-shade_5 hover:text-primary h-5 w-5">
                  <BsFillPlusCircleFill size={'100%'} />
               </span>
            </div>

            <ul className="grow px-1">
               {channelList ? (
                  <li className="text-shade_5 hover:text-primary hover:bg-shade_3 flex cursor-pointer items-center justify-between rounded-lg p-2">
                     <div>
                        <span className="line-clamp-1 text-sm">비공개 채널이름1</span>
                     </div>
                     <div className="ml-3 flex gap-3 text-black dark:text-white">
                        <div className="hover:text-primary h-4 w-4">
                           <BsBoxArrowInRight size={'100%'} />
                        </div>
                        <div className="hover:text-primary h-4 w-4">
                           <BsGearFill size={'100%'} />
                        </div>
                     </div>
                  </li>
               ) : null}
            </ul>
         </div>
      </div>
   );
};
