import { BsFillPlusCircleFill, BsGearFill } from 'react-icons/bs';
import { useCreateTeamSpace } from "../model/useCreateTeamSpace";
import { TextInput } from '@/features/textInput';
import { FullScreenModal } from '@/shared/ui/FullScreenModal';
import { useRoute } from "@/shared/hooks/useRoute";

export const TeamSpaceList = () => {
   const { createTeamSpaceModal, onClickIsModal, inputRef } = useCreateTeamSpace();
   const { teamspaceRoute } = useRoute();
   

   return (
      <div className="h-full p-5">
         <h1 className="py-2">나의 TeamSpcae</h1>
         {/* TeamSpace create button */}
         <div
            className="h-32 p-4 rounded-lg cursor-pointer card-gradient-light dark:card-gradient-dark text-primary group hover:text-white"
            onClick={onClickIsModal}>
            <h2 className="italic">TeamSpace 생성</h2>
            <span className="p-1 text-xs">지금바로 나만의 팀을 만들어 보세요</span>
            <div className="flex items-center justify-end gap-3">
               <span className="duration-300 opacity-0 text-shade_5 group-hover:opacity-100">생성하기</span>
               <BsFillPlusCircleFill size={40} />
            </div>
         </div>
         {/* TeamSpace create modal */}
         {/* <FullScreenModal title="TeamSpace 생성" isModal={createTeamSpaceModal} closeModal={onClickIsModal}>
            <div className="flex w-[300px] flex-col items-center gap-6">
               <h2 className="text-white">TeamSpace를 생성합니다.</h2>
               <TextInput
                  inputRef={inputRef}
                  placeholder="사용할 TeamSpace 채널이름을 입력해주세요"
                  nextName="생성"
                  nextCallback={() => console.log('생성동작')}
                  cancellName="취소"
                  cancellCallback={onClickIsModal}
                  regex={/^[가-힣a-zA-Z0-9]{5,20}$/}
                  regexText="5글자 이상 ~ 20글자 이하 (한글/영어/숫자)만 가능합니다"
               />
            </div>
         </FullScreenModal> */}

         <ul className="flex flex-col max-w-6xl gap-2 py-2">
            <li className="flex gap-2 sm:flex-col" onClick={()=>teamspaceRoute("teamSpaceName")}>
               <div className="flex justify-between cursor-pointer button-layout _active">
                  <span>TeamSpaceList</span>
                  <div className="w-5 h-5 text-shade_5 hover:text-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
               <div className="flex justify-between cursor-pointer button-layout _active">
                  <span>TeamSpaceList</span>
                  <div className="w-5 h-5 text-shade_5 hover:text-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
            </li>
            <li className="flex gap-2 sm:flex-col" onClick={()=>teamspaceRoute("teamSpaceName")}>
               <div className="flex justify-between cursor-pointer button-layout _active">
                  <span>TeamSpaceList</span>
                  <div className="w-5 h-5 text-shade_5 hover:text-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
               <div className="flex justify-between cursor-pointer button-layout _active">
                  <span>TeamSpaceList</span>
                  <div className="w-5 h-5 text-shade_5 hover:text-white">
                     <BsGearFill size={'100%'} />
                  </div>
               </div>
            </li>
            <li className="flex">
               <div className="text-center text-black shadow-none cursor-pointer button-layout bg-shade_2 hover:bg-shade_3 hover:text-white dark:text-white">
                  더보기
               </div>
            </li>
         </ul>
         <h1 className="py-2">참여중인 TeamSpace</h1>
         <ul className="flex flex-col max-w-5xl gap-2 py-2">
            <li className="flex gap-2 sm:flex-col" onClick={()=>teamspaceRoute("teamSpaceName")}>
               <div className="flex flex-col items-start cursor-pointer button-layout _active">
                  <span>TeamSpaceList</span>
                  <span className="text-shade_5">TeamSpace만든사람 이메일</span>
               </div>
               <div className="flex flex-col items-start cursor-pointer button-layout _active">
                  <span>TeamSpaceList</span>
                  <span className="text-shade_5">TeamSpace만든사람 이메일</span>
               </div>
            </li>
            <li className="flex gap-2 sm:flex-col" onClick={()=>teamspaceRoute("teamSpaceName")}>
               <div className="flex flex-col items-start cursor-pointer button-layout _active">
                  <span>TeamSpaceList</span>
                  <span className="text-shade_5">TeamSpace만든사람 이메일</span>
               </div>
               <div className="flex flex-col items-start cursor-pointer button-layout _active">
                  <span>TeamSpaceList</span>
                  <span className="text-shade_5">TeamSpace만든사람 이메일</span>
               </div>
            </li>
            <li className="flex">
               <div className="text-center text-black shadow-none cursor-pointer button-layout bg-shade_2 hover:bg-shade_3 hover:text-white dark:text-white">
                  더보기
               </div>
            </li>
         </ul>
      </div>
   );
};
