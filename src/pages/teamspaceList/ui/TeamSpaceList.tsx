import { useState } from 'react';
import { BsFillPlusCircleFill, BsGearFill, BsXLg } from 'react-icons/bs';

export const TeamSpaceList = () => {
   const [isTeamSpaceModal, setIsTeamSpaceModal] = useState(false);
   const onClickOpenModal = () => setIsTeamSpaceModal(!isTeamSpaceModal);

   return (
      <div className="h-full p-5">
         <h1 className="py-2">나의 TeamSpcae</h1>
         {/* TeamSpace create button */}
         <div className="card-gradient-light dark:card-gradient-dark text-primary group h-32 cursor-pointer rounded-lg p-4 hover:text-white" onClick={onClickOpenModal}>
            <h2 className="italic">TeamSpace 생성</h2>
            <span className="p-1 text-xs">지금바로 나만의 팀을 만들어 보세요</span>
            <div className="flex items-center justify-end gap-3">
               <span className="text-shade_5 opacity-0 duration-300 group-hover:opacity-100">생성하기</span>
               <BsFillPlusCircleFill size={40} />
            </div>
         </div>
         {/* TeamSpace create modal */}
         <div className={`full-screen-modal ${isTeamSpaceModal ? '_show' : '_hidden'}`}>
            <h1 className="title">TeamSpace 생성</h1>
            {/* <div
               onClick={onClickOpenModal}
               className="hover:text-secondary absolute right-5 top-5 flex h-[25px] w-[25px] cursor-pointer items-center justify-end text-white">
               <BsXLg size={'100%'} />
            </div> */}
         </div>

         <ul className="flex max-w-3xl flex-col gap-3 py-2">
            <li className="flex gap-2">
               <div className="button-layout _active flex cursor-pointer justify-between">
                  <span>TeamSpaceList</span>
                  <div className="text-shade_5 h-5 w-5 hover:text-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
               <div className="button-layout _active flex cursor-pointer justify-between">
                  <span>TeamSpaceList</span>
                  <div className="text-shade_5 h-5 w-5 hover:text-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
            </li>
            <li className="flex gap-2">
               <div className="button-layout _active flex cursor-pointer justify-between">
                  <span>TeamSpaceList</span>
                  <div className="text-shade_5 h-5 w-5 hover:text-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
               <div className="button-layout _active flex cursor-pointer justify-between">
                  <span>TeamSpaceList</span>
                  <div className="text-shade_5 h-5 w-5 hover:text-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
            </li>
            <li className="flex">
               <div className="button-layout bg-shade_2 hover:bg-shade_3 cursor-pointer text-center text-black shadow-none hover:text-white dark:text-white">
                  더보기
               </div>
            </li>
         </ul>
         <h1 className="py-2">참여중인 TeamSpace</h1>
         <ul className="flex max-w-3xl flex-col gap-3 py-2">
            <li className="flex gap-2">
               <div className="button-layout _active flex cursor-pointer flex-col items-start">
                  <span>TeamSpaceList</span>
                  <span className="text-shade_5">TeamSpace만든사람 이메일</span>
               </div>
               <div className="button-layout _active flex cursor-pointer flex-col items-start">
                  <span>TeamSpaceList</span>
                  <span className="text-shade_5">TeamSpace만든사람 이메일</span>
               </div>
            </li>
            <li className="flex gap-2">
               <div className="button-layout _active flex cursor-pointer flex-col items-start">
                  <span>TeamSpaceList</span>
                  <span className="text-shade_5">TeamSpace만든사람 이메일</span>
               </div>
               <div className="button-layout _active flex cursor-pointer flex-col items-start">
                  <span>TeamSpaceList</span>
                  <span className="text-shade_5">TeamSpace만든사람 이메일</span>
               </div>
            </li>
            <li className="flex">
               <div className="button-layout bg-shade_2 hover:bg-shade_3 cursor-pointer text-center text-black shadow-none hover:text-white dark:text-white">
                  더보기
               </div>
            </li>
         </ul>
      </div>
   );
};
