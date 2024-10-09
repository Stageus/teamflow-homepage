import { BsArrowDownCircle, BsFillPlusCircleFill } from 'react-icons/bs';
import { Profile } from './profile';
import { DefaultButton } from '@shared/ui';

export const Aside = () => {
   return (
      <div className="bg-light-bg2 h-full dark:bg-dark-bg2 flex flex-col gap-2">
         <section><Profile/></section>
         <section className="flex gap-2 h-full p-2">
            <div className="flex flex-col gap-3">
               <DefaultButton text="TeamSpace1" type="notSelected" onClick={() => console.log('특정TeamSpace 이동')} />
               <DefaultButton text="TeamSpace1" type="notSelected" onClick={() => console.log('특정TeamSpace 이동')} />
               <DefaultButton text="TeamSpace1" type="notSelected" onClick={() => console.log('특정TeamSpace 이동')} />
               <DefaultButton text="TeamSpace1" type="notSelected" onClick={() => console.log('특정TeamSpace 이동')} />
            </div>
            <div className="p-1 flex flex-col gap-3 bg-light-bg3 dark:bg-dark-bg3 rounded-lg grow">
               <div className="cursor-pointer text-primary-gray hover:bg-primary-gray hover:text-primary-color rounded-lg p-2">
                  <span>공지 채널</span>
               </div>
               <div className="cursor-pointer text-primary-gray hover:bg-primary-gray hover:text-primary-color rounded-lg p-2">
                  <span>공지 채널</span>
               </div>
               <div className="flex items-center justify-between cursor-pointer text-primary-gray hover:bg-primary-gray hover:text-primary-color rounded-lg p-2">
                  <span className="flex items-center gap-2">
                     비공개 채널 <BsArrowDownCircle />
                  </span>
                  <span className="text-primary-color text-secondary-title hover:text-success-color">
                     <BsFillPlusCircleFill />
                  </span>
               </div>
            </div>
         </section>
      </div>
   );
};
