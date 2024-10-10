import { BsFillPlusCircleFill, BsGearFill } from 'react-icons/bs';

export const TeamSpaceList = () => {
   return (
      <div className="h-full p-5">
         <h1 className="py-2">나의 TeamSpcae</h1>
         <div className="group card-gradient-light dark:card-gradient-dark h-32 rounded-lg p-4 cursor-pointer text-primary-color hover:text-primary-white">
            <h2 className="italic">TeamSpace 생성</h2>
            <span className="p-1 text-size-xs">지금바로 나만의 팀을 만들어 보세요</span>
            <div className="flex justify-end items-center gap-3">
                <span className='opacity-0 group-hover:opacity-100 text-primary-gray duration-300'>생성하기</span>
               <BsFillPlusCircleFill size={40}/>
            </div>
         </div>
         <ul className="flex max-w-3xl flex-col gap-3 py-2">
            <li className="flex gap-2">
               <div className="button-layout button-type-active flex cursor-pointer justify-between">
                  <span>TeamSpaceList</span>
                  <div className="h-5 w-5 text-primary-gray hover:text-primary-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
               <div className="button-layout button-type-active flex cursor-pointer justify-between">
                  <span>TeamSpaceList</span>
                  <div className="h-5 w-5 text-primary-gray hover:text-primary-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
            </li>
            <li className="flex gap-2">
               <div className="button-layout button-type-active flex cursor-pointer justify-between">
                  <span>TeamSpaceList</span>
                  <div className="h-5 w-5 text-primary-gray hover:text-primary-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
               <div className="button-layout button-type-active flex cursor-pointer justify-between">
                  <span>TeamSpaceList</span>
                  <div className="h-5 w-5 text-primary-gray hover:text-primary-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
            </li>
            <li className="flex">
               <div className="button-layout cursor-pointer text-center text-primary-black dark:text-primary-white  hover:bg-primary-gray shadow-none hover:text-primary-white">
                  더보기
               </div>
            </li>
         </ul>
         <h1 className="py-2">참여중인 TeamSpace</h1>
         <ul className="flex max-w-3xl flex-col gap-3 py-2">
            <li className="flex gap-2">
               <div className="flex flex-col items-start button-layout button-type-active cursor-pointer">
                  <span>TeamSpaceList</span>
                  <span className='text-primary-gray'>TeamSpace만든사람 이메일</span>
               </div>
               <div className="flex flex-col items-start button-layout button-type-active cursor-pointer">
                  <span>TeamSpaceList</span>
                  <span className='text-primary-gray'>TeamSpace만든사람 이메일</span>
               </div>
            </li>
            <li className="flex gap-2">
               <div className="flex flex-col items-start button-layout button-type-active cursor-pointer">
                  <span>TeamSpaceList</span>
                  <span className='text-primary-gray'>TeamSpace만든사람 이메일</span>
               </div>
               <div className="flex flex-col items-start button-layout button-type-active cursor-pointer">
                  <span>TeamSpaceList</span>
                  <span className='text-primary-gray'>TeamSpace만든사람 이메일</span>
               </div>
            </li>
            <li className="flex">
               <div className="button-layout cursor-pointer text-center text-primary-black dark:text-primary-white  hover:bg-primary-gray shadow-none hover:text-primary-white">
                  더보기
               </div>
            </li>
         </ul>
      </div>
   );
};
