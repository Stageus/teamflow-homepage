// package
import { useParams } from 'react-router-dom';
import { PlusIcon, CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
// slice
import { PrivateChannelList } from './ui/privateChannelList'
import { CreatePrivateChannelModal } from './ui/CreatePrivateChannelModal';

// layer
import { ToolTip } from '@/shared/ui/ToolTip';
import { Button } from '@/shared/ui/Button';
import { useRoute } from '@/shared/hooks/useRoute';
import { useToggle } from '@/shared/hooks/useToggle';

export const ChannelInfo = (props: ChannelInfoProps) => {
   const { publicChannel, privateChannel } = useParams();
   const { teamspaceRoute, teamspacePublicRoute } = useRoute();
   const [isPrivateChannellList, setIsPrivateChannelList] = useToggle(false);
   const [isOpenCreateModal, setIsOpenCreateModal] = useToggle(false);

   if (!props.teamSpaceName)
      return <p className="flex items-center justify-center h-full">선택된 TeamSpace가 없습니다</p>;

   return (
      <>
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
               <div className={`flex items-center grow hover:text-primary ${isPrivateChannellList && 'text-primary'}`} onClick={setIsPrivateChannelList}>
                  <span>비공개채널</span>
                  {isPrivateChannellList ? <CaretDownIcon className="w-6 h-6" /> : <CaretUpIcon className="w-6 h-6" />}
               </div>
               <ToolTip toolTipContent="채널생성" place="right">
                  <PlusIcon className="w-6 h-6 hover:text-primary" onClick={setIsOpenCreateModal} />
               </ToolTip>
            </div>
         </Button>
         <div>{isPrivateChannellList && <PrivateChannelList />}</div>

         {/* 비공개채널 생성모달 */}
         <CreatePrivateChannelModal isOpenModal={isOpenCreateModal} closeModal={setIsOpenCreateModal} />
      </>
   );
};

type ChannelInfoProps = {
   teamSpaceName: string | null;
};
