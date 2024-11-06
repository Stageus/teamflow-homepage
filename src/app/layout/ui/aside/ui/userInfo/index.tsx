import { useState, useRef } from 'react';
import { BsGearFill, BsXLg } from 'react-icons/bs';
import { TextInput } from '@features/textInput';
import { RoundProfile } from '@shared/ui/RoundProfile';
export const UserInfo = () => {
   const [isNameInput, setIsNameInput] = useState<boolean>(false);
   const toggleNameInput = () => setIsNameInput(!isNameInput);

   const [isMoreInfo, setIsMoreInfo] = useState<boolean>(false);
   const toggleMoreInfo = () => {
      setIsMoreInfo(!isMoreInfo);
      setIsNameInput(false);
   };

   const inputFileRef = useRef(null);
   const inputRef = useRef(null);
   const _dataEntry = {
      imgUrl: null,
      userEmail: 'userEmail@gmail.com',
      userNickName: '테스트유저 닉네임',
      myTeamSpace: 250,
      guestTeamSpace: 240,
   };

   return (
      <>
         <div className="flex flex-col p-3">
            {/* 유저정보 영역 */}
            <div className="flex gap-2">
               {/* 유저 profileImg*/}
               <div className="w-12 h-12">
                  <RoundProfile imgUrl={_dataEntry.imgUrl} />
               </div>
               <div className="flex flex-col justify-between gap-2 grow">
                  {/* 유저 email */}
                  <span className="text-shade_5">{_dataEntry.userEmail}</span>{' '}
                  <div className={`${isNameInput && isMoreInfo ? 'h-24' : 'h-4'} duration-200`}>
                     {isNameInput && isMoreInfo ? (
                        // 이름 변경 input
                        <TextInput
                           inputRef={inputRef}
                           nextName="저장"
                           nextCallback={() => console.log('저장시 동작')}
                           cancellName="취소"
                           cancellCallback={toggleNameInput}
                           placeholder="이전 닉네임"
                           regex={/^[가-힣a-zA-Z0-9]{3,10}$/}
                           regexText="3글자 이상 ~ 10글자 이하"
                        />
                     ) : (
                        // 유저 NickName
                        <span
                           className={`${isNameInput && isMoreInfo ? 'invisible max-h-0 opacity-0 duration-75' : 'visible max-h-20 py-2 opacity-100 duration-200'} text-primary transition-all`}>
                           {_dataEntry.userNickName}
                        </span>
                     )}
                  </div>
                  <div
                     className={`${isMoreInfo && !isNameInput ? 'visible max-h-20 py-2 opacity-100 duration-200' : 'invisible max-h-0 opacity-0 duration-75'} flex gap-2 transition-all`}>
                     {/* 이미지 변경 버튼 */}
                     <div>
                        <label htmlFor="file" className="px-2 py-1 text-xs button-layout _active">
                           이미지 변경
                        </label>
                        <input id="file" type="file" ref={inputFileRef} className="hidden" />
                     </div>
                     {/* 이름 변경 버튼 */}
                     <div>
                        <button className="px-2 py-1 text-xs button-layout _active" onClick={toggleNameInput}>
                           닉네임 변경
                        </button>
                     </div>
                  </div>
               </div>
               {/* 유저정보 더보기 버튼*/}
               <div
                  onClick={toggleMoreInfo}
                  className="flex items-center justify-end w-5 h-5 text-black cursor-pointer dark:text-white">
                  {isMoreInfo ? <BsXLg size={'100%'} /> : <BsGearFill size={'100%'} />}
               </div>
            </div>

            {/* 유저 TeamSpace정보 영역*/}
            <div
               className={`${isMoreInfo ? 'visible max-h-20 py-2 opacity-100 duration-200' : 'invisible max-h-0 opacity-0 duration-75'} flex gap-3 transition-all`}>
               <div className="flex flex-col gap-1 p-2 rounded-lg grow bg-shade_2">
                  <span className="text-sm text-primary">나의 TeamSpace</span>
                  <span className="text-black dark:text-white">{_dataEntry.myTeamSpace}</span>
               </div>
               <div className="flex flex-col gap-1 p-2 rounded-lg grow bg-shade_2">
                  <span className="text-sm text-primary">참여중인 TeamSpace</span>
                  <span className="text-black dark:text-white">{_dataEntry.guestTeamSpace}</span>
               </div>
            </div>
         </div>
      </>
   );
};
