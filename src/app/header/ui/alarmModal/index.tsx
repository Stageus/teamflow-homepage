export const AlarmModal = () => {
   return (
      <div className="absolute flex h-[425px] w-[400px] translate-y-7 flex-col justify-between rounded-lg bg-shade_1 text-black dark:text-white">
         <ul className="flex flex-col gap-4 overflow-y-scroll px-4">
            <li className="flex flex-col gap-4 border-b-2 border-shade_5 py-4">
               <div>
                  <span className="text-shade_5">{'2024-03-01'}</span>
               </div>
               <div>
                  <p className="text-base">{'초대받은 TeamSpace 이름'}</p>
               </div>
               <div className="flex gap-4">
                  <div>
                     <button className="button-layout _active" onClick={() => console.log('수락동작')}>
                        수락
                     </button>
                  </div>
                  <div>
                     <button className="button-layout _default" onClick={() => console.log('취소동작')}>
                        취소
                     </button>
                  </div>
               </div>
            </li>
            <li className="flex flex-col gap-4 border-b-2 border-shade_5 py-4">
               <div>
                  <span className="text-shade_5">{'2024-03-01'}</span>
               </div>
               <div>
                  <p className="text-base">{'초대받은 TeamSpace 이름'}</p>
               </div>
               <div className="flex gap-4">
                  <div>
                     <button className="button-layout _active" onClick={() => console.log('수락동작')}>
                        수락
                     </button>
                  </div>
                  <div>
                     <button className="button-layout _default" onClick={() => console.log('취소동작')}>
                        취소
                     </button>
                  </div>
               </div>
            </li>
         </ul>
         <div className="flex justify-center p-2">
            <div>
               <button className="button-layout _not-select" onClick={() => console.log('더보기동작')}>
                  더보기
               </button>
            </div>
         </div>
      </div>
   );
};
