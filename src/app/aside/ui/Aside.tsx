import { Profile } from './profile';
import { TeamSpcaeChannel } from './teamSpaceChannel';

export const Aside = () => {
   return (
      <div className="flex flex-col gap-2 bg-shade_1 h-full">
         <section>
            <Profile/>
         </section>
         <section className="grow flex gap-2 p-1 overflow-hidden">
            <TeamSpcaeChannel/>
         </section>
      </div>
   );
};
