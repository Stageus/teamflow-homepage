import { BsArrowDownCircle, BsFillPlusCircleFill } from 'react-icons/bs';
import { Profile } from './profile';
import { TeamSpcaeChannel } from "./teamSpaceChannel";

export const Aside = () => {
   return (
      <div className="bg-light-bg2 h-screen dark:bg-dark-bg2 flex flex-col gap-2 sticky top-0">
         <section><Profile/></section>
         <section className="flex gap-2 h-full p-2">
            <div className="flex flex-col gap-3">
               <button className='button-layout button-type-not'>TeamSpaceName</button>
               <button className='button-layout button-type-not'>TeamSpaceName</button>
               <button className='button-layout button-type-not'>TeamSpaceName</button>
               <button className='button-layout button-type-not'>TeamSpaceName</button>
               <button className='button-layout button-type-not'>TeamSpaceName</button>
               <button className='text-white bg-gray-600'>테스트</button>
            </div>
            <TeamSpcaeChannel/>
         </section>
      </div>
   );
};
