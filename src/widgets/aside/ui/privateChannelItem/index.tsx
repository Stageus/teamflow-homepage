// package
import { ExitIcon, GearIcon} from '@radix-ui/react-icons';
// Layer
import { ToolTip } from '@/shared/ui/ToolTip';
import { useRoute } from '@/shared/hooks/useRoute';
import { FullScreenModal } from '@/shared/ui/FullScreenModal';
import { useToggle } from '@/shared/hooks/useToggle';
import { Button } from '@/shared/ui/Button';
import { cn } from '@/shared/lib/cn';



//  해당 부분 전체 리팩토링해야함
//  이후에 드로어 모달또한 적용해야함


type PrivateChannelProps = {
   channelIdx: number;
   channelName: string;
}

export const PrivateChannelItem = (props: PrivateChannelProps) => {
   const { channelIdx, channelName } = props;
   const { teamspacePrivateRoute } = useRoute();
   const [isOutSideChannel, setIsOutSideChannel] = useToggle(false);
   const [isSetModal, setIsSetModal] = useToggle(false); 


   // const [toogleState, setToogleState] = useState<ToogleStateObject>({
   //    outside: false,
   //    setting: false,
   // });

   // const channgeToggleState = (key: UiStateKeys) => {
   //    setToogleState(
   //       produce(draft => {
   //          draft[key] = !draft[key];
   //       }),
   //    );
   // };

   return (
      <>
         <li
            key={channelIdx}
            className={cn('flex flex-col gap-1 p-2 rounded-lg cursor-pointer text-shade_5 hover:bg-shade_3', {'bg-shade_3': isSetModal})}>
            <div className="flex items-start">
               <div className="grow hover:text-primary" onClick={() => teamspacePrivateRoute(channelName)}>
                  <p className="max-w-[178px] truncate text-sm">{channelName}</p>
               </div>
               <div className="flex gap-3 text-black dark:text-white">
                  <ToolTip toolTipContent="채널 나가기" place='right'>
                     <div className="w-4 h-4 hover:text-primary" onClick={setIsOutSideChannel}>
                        <ExitIcon className='w-full h-full'/>
                     </div>
                  </ToolTip>
                  <ToolTip toolTipContent="채널 설정" place='right'>
                     <div className="w-4 h-4 hover:text-primary" onClick={setIsSetModal}>
                        <GearIcon className='w-full h-full'/>
                     </div>
                  </ToolTip>
               </div>
            </div>
            {isSetModal && (
               <div className={`flex justify-around items-center bg-shade_3`}>
                  <span className='hover:text-primary'>이름변경</span>
                  <span className='hover:text-primary'>추방</span>
                  <span className='hover:text-primary'>초대</span>
                  <span className='hover:text-primary'>삭제</span>
               </div>
            )}
         </li>
         {/* 채널 나가기 모달 */}
         <FullScreenModal
            title="채널나가기"
            variant={ isOutSideChannel ? 'show' : 'hide'}
            closeModal={setIsOutSideChannel}>
            <div className="flex w-[300px] flex-col items-center gap-6">
               <h2 className="text-white whitespace-nowrap">{'정말 (채널이름) 을 나가겠습니까?'}</h2>
               <div className="flex gap-3">
                  <Button variant='danger' onClick={()=> console.log('채널나가기 동작')}>나가기</Button>
                  <Button variant='default' onClick={setIsOutSideChannel}>취소</Button>
               </div>
            </div>
         </FullScreenModal>
      </>
   );
};
