// Npm
import { useMatch } from 'react-router-dom';
import { PlusIcon, CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
// slice
import { PrivateChannelItem } from './ui/privateChannelItem';
import { CreatePrivateChannelModal } from './ui/createPrivateChannelModal';
// layer
import { PATHS } from '@/shared/consts/paths';
import { useRoute } from '@/shared/hooks/useRoute';
import { FullScreenModal } from '@/shared/ui/FullScreenModal';
import { ToolTip } from '@/shared/ui/ToolTip';
import { Button } from '@/shared/ui/Button';
import { useToggle } from '@/shared/hooks/useToggle';

// 임시데이터
const _PrivateChannelList = Array.from([
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
]).map((_, idx) => ({
   channelIdx: idx,
   channelName: `ForntEnd-${idx}Team`,
}));

export const TeamSpcaeChannelList = () => {
   const match = useMatch({
      path: `/${PATHS.teamSpace}/:${PATHS.teamSpaceName}/:type?/:${PATHS.channelName}?`,
      end: false,
   });

   const [isPrivateChannelList, setIsPrivateChannelList] = useToggle(false);
   const [isOpenCreateChannelModal, setIsOpenCreateChannelModal] = useToggle(false);
   const { teamspaceRoute, teamspacePublicRoute } = useRoute();
   
   return (
      <>
         <div className="flex h-full min-w-[172px] grow flex-col gap-2 rounded-lg bg-shade_2 p-1 text-shade_5">
            {match?.params.teamspace_name ? (
               <>
                  <Button
                     variant={!match.params.type ? 'select' : 'ghost'}
                     className="justify-start"
                     onClick={() => teamspaceRoute(match.params.teamspace_name)}>
                     공지 채널
                  </Button>
                  <Button
                     variant={match.params.type === PATHS.public ? 'select' : 'ghost'}
                     className="justify-start"
                     onClick={teamspacePublicRoute}>
                     공지 채널
                  </Button>
                  <Button variant="ghost" asChild={true}>
                     <div>
                        <div className="flex items-center grow hover:text-primary" onClick={setIsPrivateChannelList}>
                           <span>비공개채널</span>
                           {isPrivateChannelList ? (
                              <CaretDownIcon className="w-6 h-6" />
                           ) : (
                              <CaretUpIcon className="w-6 h-6" />
                           )}
                        </div>
                        <ToolTip toolTipContent="채널생성" place="right">
                           <PlusIcon className="w-6 h-6 hover:text-primary" onClick={setIsOpenCreateChannelModal} />
                        </ToolTip>
                     </div>
                  </Button>
               </>
            ) : (
               <p className="flex items-center justify-center h-full">선택된 TeamSpace가 없습니다</p>
            )}
            <ul className="flex flex-col gap-3 px-1 overflow-y-scroll scroll grow">
               {isPrivateChannelList
                  ? _PrivateChannelList.map(item => {
                       return <PrivateChannelItem key={item.channelIdx} {...item} />;
                    })
                  : null}
            </ul>
         </div>

         {/* 비공개채널 생성모달 */}
         <FullScreenModal
            title="비공개 채널생성"
            closeModal={setIsOpenCreateChannelModal}
            variant={isOpenCreateChannelModal ? 'show' : 'hide'}>
               { isOpenCreateChannelModal ? <CreatePrivateChannelModal closeModal={setIsOpenCreateChannelModal}/> : null}
         </FullScreenModal>
      </>
   );
};
