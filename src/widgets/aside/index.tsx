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
import { FullScreenModal } from '@/shared/ui/FullScreenModal';
import { ToolTip } from '@/shared/ui/ToolTip';
import { Button } from '@/shared/ui/Button';
import { useToggle } from '@/shared/hooks/useToggle';

/*
   현재 파일구조에 대해서 문제가 있다고 판단
   
   teamSpaceChannelList -> PrivateChannelList로 변경하고,
   이후에 PrivateChannelList의 구조를 Aside로 가져오기에는 문제가 있다고판단,
   Aside에서 상태를 변경하면, userProfile 이나, teanSpaceList가 다시 렌더링이 되는 상황이 발생한다
   즉, 나는 상태변경이 일어나는 컴포넌트라면, 파일을 분리하여 해당 파일에서의 상태변경으로 인한 렌더링 문제를, 다른 컴포넌트에 관여하지 않도록하여
   렌더링 최적화를 목적으로 한다. <- 기능적으로와 구조상으로 문제가 있다

   그렇다면 파일이 깊어지는것을 피하기위해 React.memo를 사용하여 
   UserProfile & TeamSpaceList 컴포넌트는 Cookie가 변경되면 리렌더링을 할수있도록
   방지한다. 이후PrivateChannelList의 구조를 Aside컴포넌트로 이동을 시킨다면?
   상태변경으로 인한 다른컴포넌트는 리렌더링이 발생하지 않는다
   그렇다면 PrivateChannelList 파일이 없어지고 Aside ui폴더에는
   PrivateChannelItem 폴더가 생기고
   그안에 여러 modal창의 ui를 담을수있는 폴더가 생기게되면 파일의 깊이가 깊어지지 않는다.
   이후 setting버튼 클릭시에 각 Item의 key를 담아 해당 item 밑에 렌더링을 시킨다면
   setting버튼이 여러개 열리는것을 방지할수가 있다.

   
   
*/

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

   const [isPrivateChannelList, setIsPrivateChannelList] = useToggle(false);
   const [isOpenCreateChannelModal, setIsOpenCreateChannelModal] = useToggle(false);
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
                     <ul className="flex flex-col gap-3 px-1 overflow-y-scroll scroll grow">
                        {isPrivateChannelList
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
            <FullScreenModal
               title="비공개 채널생성"
               closeModal={setIsOpenCreateChannelModal}
               variant={isOpenCreateChannelModal ? 'show' : 'hide'}>
               {isOpenCreateChannelModal ? (
                  <CreatePrivateChannelModal closeModal={setIsOpenCreateChannelModal} />
               ) : null}
            </FullScreenModal>
         </section>
      </div>
   );
};
