import { DefaultButton } from '@shared/ui';


export const AlarmModal = () => {

   return (
       <div className="w-[400px] h-[425px] flex flex-col justify-between bg-light-bg2 text-primary-black dark:bg-dark-bg2 dark:text-primary-white absolute rounded-lg translate-y-7">
               <ul className="flex flex-col gap-4 px-4 overflow-y-scroll">
                  <li className="flex flex-col gap-4 py-4 border-b-2 border-primary-gray">
                     <div>
                        <span className="text-primary-gray">{'2024-03-01'}</span>
                     </div>
                     <div>
                        <p>{'초대받은 TeamSpace 이름'}</p>
                     </div>
                     <div className="flex gap-4">
                        <div>
                           <DefaultButton type="active" text="수락" onClick={() => console.log('수락동작')} />
                        </div>
                        <div>
                           <DefaultButton type="default" text="거절" onClick={() => console.log('거절동작')} />
                        </div>
                     </div>
                  </li>
                  <li className="flex flex-col gap-4 py-4 border-b-2 border-primary-gray">
                     <div>
                        <span className="text-primary-gray">{'2024-03-01'}</span>
                     </div>
                     <div>
                        <p>{'초대받은 비공개채널 이름'}</p>
                     </div>
                     <div className="flex gap-4">
                        <div>
                           <DefaultButton type="active" text="수락" onClick={() => console.log('수락동작')} />
                        </div>
                        <div>
                           <DefaultButton type="default" text="거절" onClick={() => console.log('거절동작')} />
                        </div>
                     </div>
                  </li>
                  <li className="flex flex-col gap-4 py-4 border-b-2 border-primary-gray">
                     <div>
                        <span className="text-primary-gray">{'2024-03-01'}</span>
                     </div>
                     <div>
                        <p>{'초대받은 비공개채널 이름'}</p>
                     </div>
                     <div className="flex gap-4">
                        <div>
                           <DefaultButton type="active" text="수락" onClick={() => console.log('수락동작')} />
                        </div>
                        <div>
                           <DefaultButton type="default" text="거절" onClick={() => console.log('거절동작')} />
                        </div>
                     </div>
                  </li>
               </ul>
               <div className="p-2 flex justify-center">
                  <div><DefaultButton type="default" text="더보기" onClick={() => console.log('더보기동작')} /></div>
               </div>
            </div>
   );
};
