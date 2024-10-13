import { BsArrowDownCircle, BsFillPlusCircleFill } from 'react-icons/bs';
import { Profile } from './profile';
import { TeamSpcaeChannel } from './teamSpaceChannel';

export const Aside = () => {
   return (
      <div className="sticky top-0 flex h-screen flex-col gap-2 bg-light-bg2 dark:bg-dark-bg2">
         <section>
            <Profile />
         </section>
         <section className="flex h-full gap-2 p-2">
            <TeamSpcaeChannel />
         </section>
      </div>
   );
};
