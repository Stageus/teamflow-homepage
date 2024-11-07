import { UserInfo } from './ui/userInfo';
import { TeamSpcaeChannel } from './ui/teamSpaceChannel';
import { QuickList } from "./ui/quickList";

export const Aside = () => {
   return (
      <div className="flex flex-col h-full gap-2 bg-shade_1">
         <section>
            <UserInfo/>
         </section>
         <section className="flex gap-2 p-2 overflow-hidden">
            <QuickList/>
            <TeamSpcaeChannel/>
         </section>
      </div>
   );
};
