// package
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { ExitIcon, GearIcon, CrossCircledIcon } from '@radix-ui/react-icons';
// slice
import { ExitModal } from './ui/ExitModal';
// layer
import { useToggle } from '@/shared/hooks/useToggle';
import { ToolTip } from '@/shared/ui/ToolTip';
import { cn } from '@/shared/lib/cn';
import { useRoute } from '@/shared/hooks/useRoute';
import { PrivatechannelContext } from '@/shared/context/privateChannelContext';

// 임시데이터
const _PrivateChannelList = Array.from([
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
]).map((_, idx) => ({
   channelIdx: idx,
   channelName: `ForntEnd-${idx}Team`,
}));

/*

   사용될 모달 ---- 
   비공개 채널 이름변경
   비공개 채널 나가기
   비공개 채널 추방
   비공개 채널 초대
   비공개 채널 삭제
   
   모달이 쓰이는곳은 각 컴포넌트마다 틀리지만,
   어차피 Asdie에서만 쓰이는 모달들이다
   이름 ui폴더안의 ModalList 컴포넌트로 만들어 관리하고
   contextAPI를 통해 생성을 제외한 변경,나가기,추방,초대,삭제 등에 필요한 데이터를
   한번에 저정하여 각 역할에 맞게 사용하는것이 좋을것 같음
   공통적으로 필수 데이터를 종합하자면
   - 채널인덱스
   - 채널이름

   컴포넌트로 나눌경우
   item컴폰트를 분리한다면 해당 컴포넌트
   세가지의 props를 전달해야한다
   채널인덱스, 채널이름, useParams를 이용하여 채널 idx가 현재에대해 일치하는지에 대한 boolean
   그렇개 된다면 React.memo를 이용하여 boolean값으로 리렌더링 여부를 막을수가 있고
   해당 boolean값을 이용하여 모달리스트 목록을 보여줄수도 있다

   각 모달들은 item컴포넌트가 클릭되었을시에 저장된정보를 기준으로 modal창 내부에서 값을 사용하면 되는데 
   각모달창을 열고 닫는건 ? 
   contextAPI에 type을 지정할수도 있지만 요건에 맞지 않음
   그렇다면 useState로 처리해야하는데 문제는 useState에 상태 변화가 일어나면 해당 
   목록 자체가 리렌더링이 발생한다.

   단순히 생각하여 contextAPI는 채널에 대한 정보만을 담고
   동작에 대해서는 해당 컴포넌트에서 처리하는게 맞음
   
   그렇다면 상위 컴포넌트에서 uesState를 사용하되 비교한값을 props로 넘겨주는 동작으로 해야한다
   
   

   컴포넌트로 안나눌경우
   
*/
export const PrivateChannelList = () => {
   const location = useLocation();
   const { teamspacePrivateRoute } = useRoute();
   const [isOpenModalList, setIsOpenModalList] = useToggle(false);
   const [isOpenExitModal, setIsOpenExitModal] = useToggle(false);
   const { privateChannel, savePrivateChannel } = React.useContext(PrivatechannelContext);

   return (
      <ul className="flex flex-col gap-3 px-1 overflow-y-scroll scroll grow">
         {_PrivateChannelList.map(item => {
            return (
               <div key={item.channelIdx}>
                  {isOpenModalList ? (
                     <div className={`flex gap-3`}>
                        <span className="hover:text-primary">이름변경</span>
                        <span className="hover:text-primary">추방</span>
                        <span className="hover:text-primary">초대</span>
                        <span className="hover:text-primary">삭제</span>
                     </div>
                  ) : (
                     <li
                        className={cn(
                           'flex cursor-pointer flex-col gap-2 rounded-lg p-2 text-shade_5 hover:bg-shade_3',
                           {
                              'bg-shade_3': location.state === item.channelIdx,
                           },
                        )}
                        onClick={() => savePrivateChannel(item.channelIdx, item.channelName)}>
                        <div className="flex items-start">
                           <div
                              className="text-sm grow"
                              onClick={() => teamspacePrivateRoute(item.channelIdx, item.channelName)}>
                              <p className="max-w-[178px] truncate hover:text-primary">{item.channelName}</p>
                           </div>
                           <div className="flex gap-3 text-black dark:text-white">
                              <ToolTip toolTipContent="채널 설정" place="right">
                                 <div
                                    className="w-4 h-4 hover:text-primary"
                                    onClick={setIsOpenModalList}>
                                    <GearIcon className="w-full h-full" />
                                 </div>
                              </ToolTip>
                              <ToolTip toolTipContent="채널 나가기" place="right">
                                 <div
                                    className="w-4 h-4 hover:text-primary"
                                    onClick={setIsOpenExitModal}>
                                    <ExitIcon className="w-full h-full" />
                                 </div>
                              </ToolTip>
                           </div>
                        </div>
                     </li>
                  )}
               </div>
            );
         })}

         <ExitModal isOpenExitModal={isOpenExitModal} setIsOpenExitModal={setIsOpenExitModal} />
      </ul>
   );
};
