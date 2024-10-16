import { useState } from 'react';
import { BsFileEarmarkDiff, BsFillPencilFill, BsTrash3 } from 'react-icons/bs';
import testImg from '@shared/assets/고양이.jpeg';

export const Thread = () => {
   const [textLine, setTextLine] = useState(false);
   const onClickMoreText = () => setTextLine(!textLine);
   return (
      <>
         <div className="bg-shade_4 flex flex-col gap-2 rounded-lg p-2">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full">
                     <img className="h-full w-full rounded-full" src={testImg} />
                  </div>
                  <div className="text-primary">
                     <span>작성자이름</span>
                  </div>
                  <div className="text-shade_5">
                     <span>2024-01-01</span>
                  </div>
               </div>
               <div className="flex gap-2">
                  <span className="hover:text-secondary h-5 w-5 cursor-pointer text-black dark:text-white">
                     <BsFileEarmarkDiff size={'100%'} />
                  </span>
                  <span className="hover:text-secondary h-5 w-5 cursor-pointer text-black dark:text-white">
                     <BsFillPencilFill size={'100%'} />
                  </span>
                  <span className="hover:text-secondary h-5 w-5 cursor-pointer text-black dark:text-white">
                     <BsTrash3 size={'100%'} />
                  </span>
               </div>
            </div>
            <div>
               <p
                  className={`text-black dark:text-white ${textLine ? 'line-clamp-none max-h-40 overflow-visible' : 'line-clamp-2 max-h-9 overflow-hidden'} transition-all duration-200`}>
                  사용자 친화적 인터페이스로 직관적이고 깔금한 Ui를 통해 사용자들이 기능을 쉽게 이해하고 활용할수 있도록
                  설계되었습니다. 실시간 기능 중심이며, 실시간 채팅 알림등 즉각적인 피드백이 필요한 기능들을 사용할수가
                  있습니다 이로인해 팀원 간의 신속한 소통을 지원합니다.사용자 친화적 인터페이스로 직관적이고 깔금한 Ui를
                  통해 사용자들이 기능을 쉽게 이해하고 활용할수 있도록 설계되었습니다. 실시간 기능 중심이며, 실시간 채팅
                  알림등 즉각적인 피드백이 필요한 기능들을 사용할수가 있습니다 이로인해 팀원 간의 신속한 소통을
                  지원합니다. 끝!
               </p>
               <span className="text-secondary cursor-pointer" onClick={onClickMoreText}>
                  {textLine ? '접기' : '더보기'}
               </span>
            </div>
            <div className="max-w-screen-md flex gap-2 text-black dark:text-white">
               <div className="bg-shade_5 grow rounded-lg p-2 text-white">파일이름</div>
               <div className="bg-shade_5 grow rounded-lg p-2 text-white">파일이름</div>
               <div className="bg-shade_5 grow rounded-lg p-2 text-white">파일이름</div>
            </div>
         </div>
         <div className='flex flex-col gap-2 border-primary border-4 rounded-lg p-3 h-72'>
            <div className='flex items-center gap-2'><span className='text-xs text-shade_5'>모두에게 멘션</span><input type='checkbox'/></div>
            <textarea className='grow w-full text-left bg-transparent outline-none text-black dark:text-white border-b-2 border-shade_5 resize-none' placeholder='최대 1000자까지 입력 가능합니다'/>
            <div className='flex items-center gap-2'>
                <div><button className='button-layout _disabled'>작성하기</button></div>
                <span className="h-6 w-6 cursor-pointer text-black hover:text-secondary dark:text-white dark:hover:text-secondary">
                     <BsFileEarmarkDiff size={'100%'} />
                </span>
            </div>
         </div>
      </>
   );
};
