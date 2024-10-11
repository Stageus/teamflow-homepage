import { useState } from 'react';
import { BsArrowDownCircle, BsFillPlusCircleFill, BsBoxArrowInRight, BsGearFill } from 'react-icons/bs';
import { useRoute } from '@shared/hooks';

export const TeamSpcaeChannel = () => {
   const { teamspaceRoute, teamspacePublicRoute, teamspacePrivateRoute } = useRoute();
   const [openChannnelList, setOpenChannelList] = useState(false);

   return (
      <div className="flex grow flex-col gap-3 rounded-lg bg-light-bg3 p-1 dark:bg-dark-bg3">
         <div
            className="flex items-center cursor-pointer rounded-lg p-2 h-10 text-primary-gray hover:bg-light-bg3 hover:text-primary-white"
            onClick={() => teamspaceRoute('teamspaceName')}>
            <span>공지 채널</span>
         </div>

         <div
            className="flex items-center cursor-pointer rounded-lg p-2 h-10 text-primary-gray hover:bg-light-bg3 hover:text-primary-white"
            onClick={() => teamspacePublicRoute('teamspaceName')}>
            <span>공개 채널</span>
         </div>

         <div className="flex justify-between items-center cursor-pointer rounded-lg p-2 h-10 text-primary-gray  hover:text-primary-color">
            <span className="flex items-center gap-2">
               비공개 채널 <BsArrowDownCircle />
            </span>
            <span className="text-secondary-title text-primary-gray hover:text-primary-color">
               <BsFillPlusCircleFill />
            </span>
         </div>
         <ul className='px-4'>
               <li className="flex rounded-lg justify-between items-center cursor-pointer text-primary-gray hover:text-primary-white hover:bg-light-bg3">
                  <span>비공개 채널이름1</span>
                  <div className='flex gap-3 text-primary-black dark:text-primary-white'>
                     <BsBoxArrowInRight size={20}/>
                     <BsGearFill size={20}/>
                  </div>
               </li>
            </ul>
      </div>
   );
};
