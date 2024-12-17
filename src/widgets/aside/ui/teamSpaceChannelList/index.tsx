// Npm
import { useMatch } from 'react-router-dom';
import { PlusIcon, CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
// slice
import { PrivateChannel } from './ui/privateChannel';
// layer
import { PATHS } from '@/shared/consts/paths';
import { useRoute } from '@/shared/hooks/useRoute';
import { FullScreenModal } from '@/shared/ui/FullScreenModal';
import { ToolTip } from '@/shared/ui/ToolTip';
import { useValidation } from '@/shared/hooks/useValidation';
import { channelRegexp } from '@/shared/consts/regExp';
import { Button } from '@/shared/ui/Button';
import { useToggle } from '@/shared/hooks/useToggle';

export const TeamSpcaeChannelList = () => {
   const [isPrivateChannelList, setIsPrivateChannelList] = useToggle(false);
   const [isOpenCreateChannelModal, setIsOpenCreateChannelModal] = useToggle(false);
   const { teamspaceRoute, teamspacePublicRoute } = useRoute();
   const { inputRef, validationResult, isCheckValidation } = useValidation(channelRegexp);
   const match = useMatch({
      path: `/${PATHS.teamSpace}/:${PATHS.teamSpaceName}/:type?/:${PATHS.channelName}?`,
      end: false,
   });
   // 임시데이터
   const _PrivateChannelList = Array.from([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
   ]).map((_, idx) => ({
      channelIdx: idx,
      channelName: `ForntEnd-${idx}Team`,
   }));

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
                       return <PrivateChannel key={item.channelIdx} {...item} />;
                    })
                  : null}
            </ul>
         </div>

         {/* 비공개채널 생성모달 */}
         <FullScreenModal
            title="비공개 채널생성"
            closeModal={setIsOpenCreateChannelModal}
            variant={isOpenCreateChannelModal ? 'show' : 'hide'}>
            <div className="flex w-[300px] flex-col gap-3">
               <h2 className="text-white">어떤 그룹을 만들생각인가요?</h2>
               <input
                  ref={inputRef}
                  onChange={isCheckValidation}
                  placeholder="비공개 채널이름을 지어주세요!"
                  className={`input-layout py-2 ${inputRef.current?.value && (validationResult ? 'border-success' : 'border-error')}`}
               />
               <p className={`text-sm text-error ${validationResult ? 'text-success' : 'text-error'} h-3`}>
                  {inputRef.current && (validationResult ? '사용가능합니다' : '5글자 이상 ~ 20글자 이하')}
                  {inputRef && validationResult ? '사용가능합니다' : '5글자 이상 ~ 20글자 이하'}
               </p>
               <div className="flex justify-center gap-3 py-2">
                  <div>
                     <button
                        className={`button-layout ${validationResult ? '_active' : '_disabled'}`}
                        onClick={() => console.log(inputRef.current?.value)}>
                        채널생성
                     </button>
                  </div>
                  <div>
                     <button className="button-layout _default" onClick={setIsOpenCreateChannelModal}>
                        취소
                     </button>
                  </div>
               </div>
            </div>
         </FullScreenModal>
      </>
   );
};
