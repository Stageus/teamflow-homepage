import {
   BsArrowDownCircle,
   BsFillPlusCircleFill,
   BsBoxArrowInRight,
   BsGearFill,
   BsArrowUpCircle,
} from 'react-icons/bs';
import { useMatch } from 'react-router-dom';

import { useChannelList } from './model/useChannelList';
import { useCreateChannel } from './model/useCreateChannel';
import { useOutsideChannel } from './model/useOutsideChannel';

import { TextInput } from '@features/textInput';
import { PATHS } from '@shared/consts/paths';
import { useRoute } from '@shared/hooks/useRoute';
import { FullScreenModal } from '@shared/ui/FullScreenModal';
import { ToolTip } from '@shared/ui/ToolTip';
import { DrawerModal } from '@shared/ui/DrawerModal';
import { useState } from 'react';

export const TeamSpcaeChannel = () => {
   const { teamspaceRoute, teamspacePublicRoute, teamspacePrivateRoute } = useRoute();
   const { channelList, onClickShowList } = useChannelList();
   const { createChannelModal, onClickIsModal, inputRef } = useCreateChannel();
   const { outSideChannelModal, onClickIsOutside } = useOutsideChannel();
   const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);

   const toggleSettingModal = channelIdx => {
      // setIsSettingModalOpen(!isSettingModalOpen);
      // console.log(window.scrollY);

      // const target = event.currentTarget;
      // const rect = target.getBoundingClientRect();
      setIsSettingModalOpen(!isSettingModalOpen);
   };

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
         <div className="h-full flex min-w-[172px] grow flex-col gap-2 rounded-lg bg-shade_2 p-1 text-shade_5">
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
                     <div className="flex items-center gap-3 grow hover:text-primary" onClick={onClickShowList}>
                        <span>비공개 채널</span>
                        <span className="w-5 h-5">
                           {channelList ? <BsArrowUpCircle size={'100%'} /> : <BsArrowDownCircle size={'100%'} />}
                        </span>
                     </div>
                     <ToolTip toolTipContent="채널 생성">
                        <div className="w-5 h-5 text-shade_5 hover:text-primary" onClick={onClickIsModal}>
                           <BsFillPlusCircleFill size={'100%'} />
                        </div>
                     </ToolTip>
                     {/* create channel modal */}
                     <FullScreenModal title="비공개 채널생성" isModal={createChannelModal} closeModal={onClickIsModal}>
                        <div className="flex w-[300px] flex-col items-center gap-6">
                           <h2 className="text-white">비공개 채널을 생성합니다.</h2>
                           <TextInput
                              inputRef={inputRef}
                              placeholder="사용할 비공개 채널이름을 입력해주세요"
                              nextName="생성"
                              nextCallback={() => console.log('생성동작')}
                              cancellName="취소"
                              cancellCallback={onClickIsModal}
                              regex={/^[가-힣a-zA-Z0-9]{5,20}$/}
                              regexText="5글자 이상 ~ 20글자 이하 (한글/영어/숫자)만 가능합니다"
                           />
                        </div>
                     </FullScreenModal>
                  </div>

                  {/* 비공개 채널 리스트 ui분리 */}
                  <ul className="flex flex-col gap-3 px-1 overflow-y-scroll scroll grow">
                     {channelList
                        ? _PrivateChannelList.map(item => {
                             return (
                                <li
                                   key={item.channelIdx}
                                   className="flex flex-col gap-1 p-2 rounded-lg cursor-pointer  item s-center text-shade_5 hover:bg-shade_3">
                                   <div className="flex items-start">
                                      <div
                                         className="grow hover:text-primary"
                                         onClick={() => teamspacePrivateRoute(item.channelName)}>
                                         <p className="max-w-[178px] truncate text-sm">{item.channelName}</p>
                                      </div>
                                      <div className="flex gap-3 text-black dark:text-white">
                                         <ToolTip toolTipContent="채널 나가기">
                                            <div className="w-4 h-4 hover:text-primary" onClick={onClickIsOutside}>
                                               <BsBoxArrowInRight size={'100%'} />
                                            </div>
                                         </ToolTip>
                                         <ToolTip toolTipContent="채널 설정">
                                            <div className="w-4 h-4 hover:text-primary" onClick={toggleSettingModal}>
                                               <BsGearFill size={'100%'} />
                                            </div>
                                         </ToolTip>
                                      </div>
                                   </div>
                                   <div className={`flex justify-around ${isSettingModalOpen ? "" : ""}`}>
                                      <span>이름변경</span>
                                      <span>초대</span>
                                      <span>추방</span>
                                      <span>삭제</span>
                                   </div>
                                </li>
                             );
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
         <FullScreenModal title="채널나가기" isModal={outSideChannelModal} closeModal={onClickIsOutside}>
            <div className="flex w-[300px] flex-col items-center gap-6">
               <h2 className="text-white whitespace-nowrap">{'정말 (채널이름) 을 나가겠습니까?'}</h2>
               <div className="flex gap-3">
                  <button className="button-layout _danger" onClick={() => console.log('채널나가기 동작')}>
                     나가기
                  </button>
                  <button className="button-layout _default" onClick={onClickIsOutside}>
                     취소
                  </button>
               </div>
            </div>
         </FullScreenModal>
      </div>
   );
};
