import { BsFileEarmarkDiff, BsCheck2Circle, BsXLg } from 'react-icons/bs';
import { Thread } from '@widgets/thread';

export const TeamSpace = () => {

   return (
      <div className="relative flex flex-col gap-4 p-2">
         <Thread />
         <Thread />
         <Thread />
         <Thread />
         <Thread />
         <Thread />
         <div className="border-primary bg-shade_1 sticky bottom-5 left-0 right-0 flex h-[200px] flex-col gap-3 rounded-lg border-2 p-2">
            <div className="flex items-center justify-between">
               <div className='flex items-center gap-3 text-gray'>
                    <div><span className='text-sm'>모두에게 멘션</span></div>
                    <div className='w-5 h-5 theme-hover-text'><BsCheck2Circle size={'100%'}/></div>
                </div>
               <div className='text-gray w-5 h-5 cursor-pointer'>
                  <BsXLg size={'100%'}/>
               </div>
            </div>
            <div className="grow flex border-b-2 border-shade_5">
               <textarea className='grow resize-none bg-transparent outline-none theme-text text-sm' placeholder='최대 1000자 이하'/>
            </div>
            <div className="flex items-center gap-3">
               <div>
                  <button className="button-layout _active">작성하기</button>
               </div>
               <div className="theme-text theme-hover-text h-5 w-5">
                  <BsFileEarmarkDiff size={'100%'} />
               </div>
               <span className="text-error whitespace-nowrap">유효성 검사 텍스트</span>
            </div>
         </div>
      </div>
   );
};