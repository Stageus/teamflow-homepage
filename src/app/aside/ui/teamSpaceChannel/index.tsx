import { useState, useRef } from 'react';
import {
   BsArrowDownCircle,
   BsFillPlusCircleFill,
   BsBoxArrowInRight,
   BsGearFill,
   BsArrowUpCircle,
} from 'react-icons/bs';
import { TextInput } from '@features/textInput';
import { useRoute } from '@shared/hooks';
import { FullScreenModal } from '@shared/ui';

export const TeamSpcaeChannel = () => {
   const { teamspaceRoute, teamspacePublicRoute, teamspacePrivateRoute } = useRoute();

   const [channelList, setChannelList] = useState(false);
   const onClickShowList = () => setChannelList(!channelList);

   const [createChannelModal, setCreateChannelModal] = useState(false);
   const onClickIsModal = () => setCreateChannelModal(!createChannelModal);
   const inputRef = useRef(null);

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
               <span className="text-shade_5 hover:text-primary h-5 w-5" onClick={onClickIsModal}>
                  <BsFillPlusCircleFill size={'100%'} />
               </span>
               {/* create channel modal */}
               <FullScreenModal title="비공개 채널생성dddddddfasdfsdfdsf" isModal={createChannelModal} closeModal={onClickIsModal}>
                  <div className='w-[300px] flex flex-col gap-6 items-center'>
                  <h2 className="text-shade_5">비공개 채널을 생성합니다.</h2>
                  <TextInput
                     inputRef={inputRef}
                     placeholder='사용할 비공개 채널이름을 입력해주세요'
                     nextName='생성'
                     nextCallback={()=>console.log("생성동작")}
                     cancellName='취소'
                     cancellCallback={onClickIsModal}
                     regex={/^[가-힣a-zA-Z0-9]{5,20}$/}
                     regexText="5글자 이상 ~ 20글자 이하 (한글/영어/숫자)만 가능합니다"
                  />
                  </div>
               </FullScreenModal>
            </div>

            <ul className="grow px-1">
               {channelList ? (
                  <li className="text-shade_5 hover:text-primary hover:bg-shade_3 flex cursor-pointer items-center justify-between rounded-lg p-2">
                     <div className="grow" onClick={() => console.log('채널이동')}>
                        <span className="line-clamp-1 text-sm">비공개 채널이름1</span>
                     </div>
                     <div className="ml-3 flex gap-3 text-black dark:text-white">
                        <div className="hover:text-primary h-4 w-4" onClick={() => console.log('채널 나가기')}>
                           <BsBoxArrowInRight size={'100%'} />
                        </div>
                        <div className="hover:text-primary h-4 w-4" onClick={() => console.log('채널관리 모달')}>
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
