//package
import { useParams } from 'react-router-dom';
// slice
import { UserProfile } from './ui/userProfile';
import { TeamSpaceList } from './ui/TeamSpaceList';
import { ChannelList } from './ui/channelList';
import { CreatePrivateChannelModal } from './ui/CreatePrivateChannelModal';

export const Aside = () => {
   const { teamSpaceName } = useParams();

   return (
      <div className="flex flex-col h-full gap-2 bg-shade_1">
         <section>
            <UserProfile />
         </section>
         <section className="flex gap-2 p-2 overflow-hidden">
            <TeamSpaceList teamSpaceName={teamSpaceName} />
            <ChannelList teamSpaceName={teamSpaceName} />
         </section>
         <CreatePrivateChannelModal/>
      </div>
   );
};
