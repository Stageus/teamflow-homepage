import { Button } from '@/shared/ui/Button';

export const AlarmModal = () => {
   return (
      <div className="flex flex-col justify-between gap-3 absolute top-full left-1/2 w-[300px] h-[400px] -translate-x-1/2 translate-y-2 z-50 bg-shade_1 rounded-lg shadow-xl p-1 text-black dark:text-white">
         <ul className="flex flex-col gap-4 px-4 overflow-y-scroll">
            <li className="flex flex-col gap-4 py-4 border-b-2 border-shade_5">
               <div>
                  <span className="text-gray">{'2024-03-01'}</span>
               </div>
               <div>
                  <p className="text-base">{'초대받은 TeamSpace 이름'}</p>
               </div>
               <div className="flex gap-3">
                  <Button variant='select'>수락</Button>
                  <Button variant='default'>취소</Button>
               </div>
            </li>
         </ul>
         <Button variant='default' className='w-1/2 mx-auto'>더보기</Button>
      </div>
   );
};
