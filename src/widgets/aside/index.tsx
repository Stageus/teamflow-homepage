//package
import { useParams } from 'react-router-dom';
// slice
import { UserProfile } from './ui/userProfile';
import { TeamSpaceList } from './ui/TeamSpaceList';
import { ChannelInfo } from './ui/channelInfo';

export const Aside = () => {
   const { teamSpaceName } = useParams();

   return (
      <div className="flex flex-col h-full gap-2 bg-shade_1">
         <section>
            <UserProfile />
         </section>
         <section className="flex gap-2 p-2 overflow-hidden">
            <TeamSpaceList teamSpaceName={teamSpaceName} />
            <div className="flex h-full min-w-[172px] grow flex-col gap-2 rounded-lg bg-shade_2 p-1 text-shade_5">
            <ChannelInfo teamSpaceName={teamSpaceName}/>
            </div>
         </section>
      </div>
   );
};
