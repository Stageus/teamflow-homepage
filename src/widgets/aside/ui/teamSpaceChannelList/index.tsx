// Npm
import { BsArrowDownCircle, BsFillPlusCircleFill, BsArrowUpCircle } from 'react-icons/bs';
import { useMatch } from 'react-router-dom';
// slice
import { useChannelList } from './model/useChannelList';
import { useCreateChannel } from './model/useCreateChannel';
import { PrivateChannel } from './ui/privateChannel';
// layer
import { PATHS } from '@shared/consts/paths';
import { useRoute } from '@shared/hooks/useRoute';
import { FullScreenModal } from '@shared/ui/FullScreenModal';
import { ToolTip } from '@shared/ui/ToolTip';
import { useValidation } from '@shared/hooks/useValidation';
import { channelRegexp } from '@shared/consts/regExp';

export const TeamSpcaeChannelList = () => {
   const { teamspaceRoute, teamspacePublicRoute } = useRoute();
   const { channelList, toogleChannelList } = useChannelList();
   const { createChannelModal, toogleCreateChannelModal } = useCreateChannel();
   const { inputRef, isValid, isCheckValidation } = useValidation(channelRegexp);
   const match = useMatch({
      path: `/${PATHS.teamSpace}/:${PATHS.teamSpaceName}/:type?/:${PATHS.channelName}?`,
      end: false,
   });

   const _PrivateChannelList = Array.from([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
   ]).map((_, idx) => ({
      channelIdx: idx,
      channelName: `ForntEnd-${idx}Team`,
   }));


   return (
      <div className="grow">
         <div className="flex h-full min-w-[172px] grow flex-col gap-2 rounded-lg bg-shade_2 p-1 text-shade_5">
            {match?.params.teamspace_name ? (
               <>
                  <div
                     className={`shrink-0 ${!match.params.type && 'bg-shade_3 text-primary'} flex h-10 cursor-pointer items-center rounded-lg p-2 hover:text-primary`}
                     onClick={() => teamspaceRoute(match.params.teamspace_name)}>
                     <span>공지 채널</span>
                  </div>

                  <div
                     className={`shrink-0 ${match.params.type === PATHS.public && 'bg-shade_3 text-primary'} flex h-10 cursor-pointer items-center rounded-lg p-2 hover:text-primary`}
                     onClick={teamspacePublicRoute}>
                     <span>공개 채널</span>
                  </div>

                  <div className="flex items-center justify-between h-10 p-2 rounded-lg cursor-pointer shrink-0 text-shade_5">
                     <div className="flex items-center gap-3 grow hover:text-primary" onClick={toogleChannelList}>
                        <span>비공개 채널</span>
                        <span className="w-5 h-5">
                           {channelList ? <BsArrowUpCircle size={'100%'} /> : <BsArrowDownCircle size={'100%'} />}
                        </span>
                     </div>
                     {/* 비공개채널 생성 모달 버튼 */}
                     <ToolTip toolTipContent="채널 생성">
                        <div
                           className="w-5 h-5 cursor-copy text-shade_5 hover:text-primary"
                           onClick={toogleCreateChannelModal}>
                           <BsFillPlusCircleFill size={'100%'} />
                        </div>
                     </ToolTip>
                  </div>

                  {/* 비공개 채널 리스트 */}
                  <ul className="flex flex-col gap-3 px-1 overflow-y-scroll scroll grow">
                     {channelList
                        ? _PrivateChannelList.map(item => {
                             return <PrivateChannel key={item.channelIdx} {...item} />;
                          })
                        : null}
                  </ul>
               </>
            ) : (
               <div className="flex items-center h-10 p-2 rounded-lg cursor-pointer text-shade_5 hover:bg-shade_3 hover:text-primary">
                  <span>선택된 TeamSpace가 없습니다</span>
               </div>
            )}
         </div>

         {/* 비공개채널 생성모달 */}
         <FullScreenModal title="비공개 채널생성" closeModal={toogleCreateChannelModal}>
            { createChannelModal ? (<div className="flex w-[300px] flex-col gap-3">
               <h2 className="text-white">어떤 그룹을 만들생각인가요?</h2>
               <input
                  ref={inputRef}
                  onChange={isCheckValidation}
                  placeholder="비공개 채널이름을 지어주세요!"
                  className={`input-layout py-2 ${inputRef.current?.value && (isValid ? 'border-success' : 'border-error')}`}
               />
               <p className={`text-sm text-error ${isValid ? 'text-success' : 'text-error'} h-3`}>
                  {/* { inputRef.current && (isValid ? '사용가능합니다' : '5글자 이상 ~ 20글자 이하')} */}
                  { inputRef && isValid ? '사용가능합니다' : '5글자 이상 ~ 20글자 이하'}
               </p>
               <div className="flex justify-center gap-3 py-2">
                  <div>
                     <button className={`button-layout ${isValid ? '_active' : '_disabled'}`} onClick={() => console.log(inputRef.current?.value)}>
                        채널생성
                     </button>
                  </div>
                  <div>
                     <button className="button-layout _default" onClick={toogleCreateChannelModal}>
                        취소
                     </button>
                  </div>
               </div>
            </div>) : null}
         </FullScreenModal>
      </div>
   );
};
