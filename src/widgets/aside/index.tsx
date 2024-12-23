//package
import { useMatch } from 'react-router-dom';
import { PlusIcon, CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';

// slice
import { UserProfile } from './ui/userProfile';
import { PrivateChannelItem } from './ui/privateChannelItem';
import { TeamSpaceList } from './ui/teamSpaceList';
import { CreatePrivateChannelModal } from './ui/createPrivateChannelModal';

// layer
import { PATHS } from '@/shared/consts/paths';
import { useRoute } from '@/shared/hooks/useRoute';
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

export const Aside = () => {
   const match = useMatch({
      path: `/${PATHS.teamSpace}/:${PATHS.teamSpaceName}/:type?/:${PATHS.channelName}?`,
      end: false,
   });

   const [isDropDownlList, setIsDropDownlList] = useToggle(false);
   const [isOpenModal, setIsOpenModal] = useToggle(false);
   const { teamspaceRoute, teamspacePublicRoute } = useRoute();

   return (
      <div className="flex flex-col h-full gap-2 bg-shade_1">
         <section>
            <UserProfile />
         </section>
         <section className="flex gap-2 p-2 overflow-hidden">
            <TeamSpaceList />
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
                        공개 채널
                     </Button>

                     <Button variant="ghost" asChild={true}>
                        <div>
                           <div className="flex items-center grow hover:text-primary" onClick={setIsDropDownlList}>
                              <span>비공개채널</span>
                              {isDropDownlList ? (
                                 <CaretDownIcon className="w-6 h-6" />
                              ) : (
                                 <CaretUpIcon className="w-6 h-6" />
                              )}
                           </div>
                           <ToolTip toolTipContent="채널생성" place="right">
                              <PlusIcon className="w-6 h-6 hover:text-primary" onClick={setIsOpenModal} />
                           </ToolTip>
                        </div>
                     </Button>
                     <ul className="flex flex-col gap-3 px-1 overflow-y-scroll scroll grow">
                        {isDropDownlList
                           ? _PrivateChannelList.map(item => {
                                return <PrivateChannelItem key={item.channelIdx} {...item} />;
                             })
                           : null}
                     </ul>
                  </>
               ) : (
                  <p className="flex items-center justify-center h-full">선택된 TeamSpace가 없습니다</p>
               )}
            </div>

            {/* 비공개채널 생성모달 */}
            <CreatePrivateChannelModal isOpenModal={isOpenModal} closeModal={setIsOpenModal} />
         </section>
      </div>
   );
};
