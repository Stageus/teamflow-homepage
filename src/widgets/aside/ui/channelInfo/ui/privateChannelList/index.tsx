// package
import * as React from 'react';
// slice
import { Item } from './ui/Item';
import { ExitModal } from './ui/ExitModal';
// layer
import { useToggle } from '@/shared/hooks/useToggle';

// 임시데이터
const _PrivateChannelList = Array.from([
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
]).map((_, idx) => ({
   channelIdx: idx,
   channelName: `ForntEnd-${idx}Team`,
}));


/*
   비공개 채널 나가기
   비공개 채널 추방
   비공개 채널 초대
   비공개 채널 삭제

   해당 컴포넌트에서 하위 아이템 에서 설정 버튼클릭시 드로어 모달가 교환하는걸로
   하위 채널 색생 변경은 useParams로 이용해서 변경하는걸로
*/
export const PrivateChannelList = () => {

   const [ isOpenModalList, setIsOpenModalList ] = useToggle(false);
   const [isOpenExitModal, setIsOpenExitModal] = useToggle(false);
    

   return (
      <ul className="flex flex-col gap-3 px-1 overflow-y-scroll scroll grow">
        { _PrivateChannelList.map( item => {
            return <>
               {isOpenModalList ? <div className={`flex gap-3`}>
                        <span className="hover:text-primary">이름변경</span>
                        <span className="hover:text-primary">추방</span>
                        <span className="hover:text-primary">초대</span>
                        <span className="hover:text-primary">삭제</span>
                     </div> : <Item key={item.channelIdx} {...item} />  }
            </>;
        })}

        <ExitModal isOpenExitModal={isOpenExitModal} setIsOpenExitModal={setIsOpenExitModal}/>
      </ul>
   );
};
