import { Profile } from './profile';
import { TeamSpcaeChannel } from './teamSpaceChannel';

export const Aside = () => {
   return (
      <div className="h-full flex flex-col gap-2 bg-shade_1">
         <section>
            <Profile/>
         </section>
         <section className="grow overflow-hidden">
               <TeamSpcaeChannel/>
         </section>
      </div>
   );
};
