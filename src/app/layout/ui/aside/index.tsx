import { UserInfo } from './ui/userInfo';
import { TeamSpcaeChannel } from './ui/teamSpaceChannel';

export const Aside = () => {
   return (
      <div className="flex flex-col h-full gap-2 bg-shade_1">
         <section>
            <UserInfo/>
         </section>
         <section className="overflow-hidden grow">
               <TeamSpcaeChannel/>
         </section>
      </div>
   );
};
