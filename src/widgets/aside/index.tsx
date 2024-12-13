// slice
import { UserProfile } from './ui/userProfile';
import { TeamSpcaeChannelList } from './ui/teamSpaceChannelList';
import { TeamSpaceList } from "./ui/teamSpaceList";

export const Aside = () => {
   return (
      <div className="flex flex-col h-full gap-2 bg-shade_1">
         <section>
            <UserProfile/>
         </section>
         <section className="flex gap-2 p-2 overflow-hidden">
            <TeamSpaceList/>
            <TeamSpcaeChannelList/>
         </section>
      </div>
   );
};
