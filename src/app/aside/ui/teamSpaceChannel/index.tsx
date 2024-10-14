import {
   BsArrowDownCircle,
   BsFillPlusCircleFill,
   BsBoxArrowInRight,
   BsGearFill,
   BsArrowUpCircle,
   BsXLg,
} from 'react-icons/bs';
import { useState } from 'react';
import { useRoute, useCreateValidation } from '@shared/hooks';

export const TeamSpcaeChannel = () => {
   const { teamspaceRoute, teamspacePublicRoute, teamspacePrivateRoute } = useRoute();

   const [channelList, setChannelList] = useState(false);
   const onClickShowList = () => setChannelList(!channelList);

   const [createChannel, setCreateChannel] = useState(false);
   const onClickOpenCreateModal = () => setCreateChannel(!createChannel);
   const { inputRef, isValid, handlerValidation } = useCreateValidation();

   return (
      <div className="flex h-full gap-3 p-2">
         <div className="flex w-full min-w-[50px] max-w-[100px] shrink grow flex-col gap-3 overflow-y-scroll">
            <button className="bg-shade_4 hover:bg-primary min-h-[50px] w-full truncate rounded-full p-2 text-sm text-white">
               TeamSpace1
            </button>
         </div>

         <div className="bg-shade_2 flex min-w-[172px] grow flex-col gap-2 overflow-y-scroll rounded-lg p-1">
            <div
               className="text-shade_5 hover:text-primary hover:bg-shade_3 flex h-10 cursor-pointer items-center rounded-lg p-2"
               onClick={() => teamspaceRoute('teamspaceName')}>
               <span>공지 채널</span>
            </div>

            <div
               className="text-shade_5 hover:text-primary hover:bg-shade_3 flex h-10 cursor-pointer items-center rounded-lg p-2"
               onClick={() => teamspacePublicRoute('teamspaceName')}>
               <span>공개 채널</span>
            </div>

            <div className="text-shade_5 hover:text-primary flex h-10 cursor-pointer items-center justify-between rounded-lg p-2">
               <div className="flex grow items-center gap-3" onClick={onClickShowList}>
                  <span>비공개 채널</span>
                  <span className="h-5 w-5">
                     {channelList ? <BsArrowUpCircle size={'100%'} /> : <BsArrowDownCircle size={'100%'} />}
                  </span>
               </div>
               <span className="h-5 w-5"></span>
               <span className="text-shade_5 hover:text-primary h-5 w-5" onClick={onClickOpenCreateModal}>
                  <BsFillPlusCircleFill size={'100%'} />
               </span>
               {/* create channel modal */}
               <div className={`full-screen-modal ${createChannel ? '_show' : '_hidden'}`}>
                  <h1 className="title">비공개 채널생성</h1>
                  <div
                     onClick={onClickOpenCreateModal}
                     className="hover:text-secondary absolute right-5 top-5 flex h-[25px] w-[25px] cursor-pointer items-center justify-end text-white">
                     <BsXLg size={'100%'} />
                  </div>
                  <div className="flex grow items-center justify-center">
                     {createChannel ? (
                        <div className="flex flex-col items-center gap-4  w-[400px]">
                           <h2 className="text-shade_5">비공개 채널의 이름을 정해주세요</h2>
                           <div className="input-form">
                              <input
                                 className="form_input"
                                 placeholder="5글자이상 ~ 20글자 이하만 가능합니다"
                                 type="text"
                                 ref={inputRef}
                                 onChange={handlerValidation}
                              />
                              <span className={`${isValid ? 'text-success' : 'text-error'} form_text`}>
                                 {isValid !== null &&
                                    (isValid
                                       ? '사용가능합니다'
                                       : '5글자이상 ~ 20글자 이하만 가능합니다')}
                              </span>
                           </div>
                           <div className="flex justify-center gap-5">
                              <button
                                 className={`button-layout ${isValid ? '_active' : '_disabled'} text-xs whitespace-nowrap`}
                                 // onClick={isValid ? console.log("생성동작") : null}
                                 >
                                 생성하기
                              </button>
                              <button className="button-layout _default" onClick={onClickOpenCreateModal}>
                                 취소
                              </button>
                           </div>
                        </div>
                     ) : null}
                  </div>
               </div>
            </div>

            <ul className="grow px-1">
               {channelList ? (
                  <li className="text-shade_5 hover:text-primary hover:bg-shade_3 flex cursor-pointer items-center justify-between rounded-lg p-2">
                     <div className='grow' onClick={()=>console.log("채널이동")}>
                        <span className="line-clamp-1 text-sm">비공개 채널이름1</span>
                     </div>
                     <div className="ml-3 flex gap-3 text-black dark:text-white">
                        <div className="hover:text-primary h-4 w-4" onClick={()=>console.log("채널 나가기")}>
                           <BsBoxArrowInRight size={'100%'} />
                        </div>
                        <div className="hover:text-primary h-4 w-4" onClick={()=>console.log("채널관리 모달")}>
                           <BsGearFill size={'100%'} />
                        </div>
                     </div>
                  </li>
               ) : null}
            </ul>
         </div>
      </div>
   );
};
