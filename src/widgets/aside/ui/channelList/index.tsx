// package
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { PlusIcon, CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
// slice
import { PrivateChannelList } from './ui/privateChannelList';

// layer
import { ToolTip } from '@/shared/ui/ToolTip';
import { Button } from '@/shared/ui/Button';
import { useRoute } from '@/shared/hooks/useRoute';
import { useToggle } from '@/shared/hooks/useToggle';
import { ModalContext } from '@/shared/context/modalContext';

export const ChannelList = (props: ChannelInfoProps) => {
   const { publicChannel, privateChannel } = useParams();
   const { teamspaceRoute, teamspacePublicRoute } = useRoute();
   const [isPrivateChannellList, setIsPrivateChannelList] = useToggle(false);
   const { selectModal } = React.useContext(ModalContext);

   if (!props.teamSpaceName)
      return <p className="flex items-center justify-center h-full grow text-gray">선택된 TeamSpace가 없습니다</p>;

   return (
      <div className="flex h-full min-w-[172px] grow flex-col gap-2 rounded-lg bg-shade_2 p-1 text-shade_5">
         <Button
            variant={!publicChannel && !privateChannel ? 'select' : 'ghost'}
            className="justify-start"
            onClick={() => teamspaceRoute(props.teamSpaceName)}>
            공지 채널
         </Button>

         <Button variant={publicChannel ? 'select' : 'ghost'} className="justify-start" onClick={teamspacePublicRoute}>
            공개 채널
         </Button>

         <Button variant="ghost" asChild={true}>
            <div>
               <div
                  className={`flex grow items-center hover:text-primary ${isPrivateChannellList && 'text-primary'}`}
                  onClick={setIsPrivateChannelList}>
                  <span>비공개채널</span>
                  {isPrivateChannellList ? <CaretDownIcon className="w-6 h-6" /> : <CaretUpIcon className="w-6 h-6" />}
               </div>
               <ToolTip toolTipContent="채널생성" place="right">
                  <PlusIcon className="w-6 h-6 hover:text-primary" onClick={() => selectModal('CREATE')} />
               </ToolTip>
            </div>
         </Button>
         <div>{isPrivateChannellList && <PrivateChannelList />}</div>
      </div>
   );
};

type ChannelInfoProps = {
   teamSpaceName: string | null;
};
