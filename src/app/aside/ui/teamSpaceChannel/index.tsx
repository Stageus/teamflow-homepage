import { BsArrowDownCircle, BsFillPlusCircleFill, BsBoxArrowInRight, BsGearFill } from 'react-icons/bs';
import { useRoute } from '@shared/hooks';

export const TeamSpcaeChannel = () => {
   const { teamspaceRoute, teamspacePublicRoute, teamspacePrivateRoute } = useRoute();

   return (
      <>
         <div className="flex w-fit max-w-40 grow flex-col gap-3">
            <button className="bg-shade_4 hover:bg-primary sm:text-xs sm:w-10 min-h-10 truncate rounded-full p-2 text-white">
               TeamSpace1
            </button>
            <button className="bg-shade_4 hover:bg-primary sm:text-xs sm:w-10 min-h-10 truncate rounded-full p-2 text-white">
               TeamSpace2
            </button>
            <button className="bg-shade_4 hover:bg-primary sm:text-xs sm:w-10 min-h-10 truncate rounded-full p-2 text-white">
               TeamSpace3
            </button>
            <button className="bg-shade_4 hover:bg-primary sm:text-xs sm:w-10 min-h-10 truncate rounded-full p-2 text-white">
               TeamSpace4
            </button>
            <button className="bg-shade_4 hover:bg-primary sm:text-xs sm:w-10 min-h-10 truncate rounded-full p-2 text-white">
               TeamSpace5
            </button>
         </div>

         <div className="bg-shade_2 flex w-full flex-col gap-3 rounded-lg p-1">
            <div
               className="h-10 flex-shrink-0 text-shade_5 hover:text-primary hover:bg-shade_3 flex cursor-pointer items-center rounded-lg p-2"
               onClick={() => teamspaceRoute('teamspaceName')}>
               <span>공지 채널</span>
            </div>

            <div
               className="h-10 flex-shrink-0 text-shade_5 hover:text-primary hover:bg-shade_3 flex cursor-pointer items-center rounded-lg p-2"
               onClick={() => teamspacePublicRoute('teamspaceName')}>
               <span>공개 채널</span>
            </div>

            <div className="h-10 flex-shrink-0 text-shade_5 hover:text-primary flex cursor-pointer items-center justify-between rounded-lg p-2">
               <span className="flex items-center gap-2">
                  비공개 채널 <BsArrowDownCircle />
               </span>
               <span className="text-shade_5 hover:text-primary h-5 w-5">
                  <BsFillPlusCircleFill size={'100%'} />
               </span>
            </div>

            <ul className="grow px-1 overflow-y-scroll">
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
            </ul>
         </div>
      </>
   );
};
