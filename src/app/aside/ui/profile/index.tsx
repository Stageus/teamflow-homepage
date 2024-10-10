import { BsGearFill, BsXLg } from 'react-icons/bs';
import { useMoreProfile } from './model/useMoreProfile';
import { useProfileImg } from './model/useProfileImg';
import { useChangeTag } from './model/useChangeTag';
import { useNameValidation } from '@shared/hooks/useNameVaildation';

import testImg from '@shared/assets/고양이.jpeg';
export const Profile = () => {
   const { isMoreProfile, onClickOpenMoreProfile } = useMoreProfile();
   const { inputFileRef, onClickFile } = useProfileImg();
   const { isChangeTag, changeTag } = useChangeTag();
   const { inputRef, isValid, handlerValidation } = useNameValidation();

   const moreStyle = {
      show: 'max-h-20 opacity-100 visible duration-200 py-2',
      hidden: 'max-h-0 opacity-0 invisible duration-75',
   };

   const nameInputStyle = {
      show: 'h-24 duration-200',
      hidden: 'h-4 duration-200',
   };

   return (
      <>
         <div className="flex flex-col p-3">
            <div className="flex gap-2">
               {/* profile img */}
               <div className="flex h-12 w-12 items-center justify-center text-primary-gray">
                  <img src={testImg} className="h-full w-full rounded-full"></img>
               </div>
               {/* profile content */}
               <div className="flex grow flex-col justify-between gap-2">
                  <span className="text-primary-gray">userEmail@gmail.com</span>
                  <div className={`${isChangeTag && isMoreProfile ? nameInputStyle.show : nameInputStyle.hidden}`}>
                     {isChangeTag && isMoreProfile ? (
                        <div className="flex flex-col gap-3">
                           <input
                              className="input-text text-size-sm"
                              placeholder="이전닉네임"
                              type="text"
                              ref={inputRef}
                              onChange={handlerValidation}
                           />
                           <span className={`${isValid ? 'text-success-color' : 'text-danger-color'} text-size-xs`}>
                              {isValid !== null &&
                                 (isValid ? '사용가능합니다' : '3글자 이상 ~ 10글자 이하 (한글,영어,숫자)')}
                           </span>

                           <div className="flex justify-center gap-5">
                              <button
                                 onClick={() => console.log('저장시 동작')}
                                 className={`button-layout ${isValid ? 'button-type-active' : 'button-type-disabled'}`}>
                                 저장
                              </button>
                              <button onClick={changeTag} className="button-layout button-type-default">
                                 취소
                              </button>
                           </div>
                        </div>
                     ) : (
                        <span
                           className={`${isChangeTag && isMoreProfile ? moreStyle.hidden : moreStyle.show} text-primary-color transition-all`}>
                           테스트유저 닉네임
                        </span>
                     )}
                  </div>
                  <div
                     className={`${isMoreProfile && !isChangeTag ? moreStyle.show : moreStyle.hidden} flex gap-2 transition-all`}>
                     <div>
                        <button
                           className="button-layout button-type-active px-2 py-1 text-size-xs"
                           onClick={onClickFile}>
                           이미지 변경
                        </button>
                     </div>
                     <div>
                        <button className="button-layout button-type-active px-2 py-1 text-size-xs" onClick={changeTag}>
                           닉네임 변경
                        </button>
                     </div>
                     <input type="file" ref={inputFileRef} className="hidden" />
                  </div>
               </div>
               <div
                  onClick={onClickOpenMoreProfile}
                  className="flex h-12 w-12 cursor-pointer items-center justify-end text-primary-black dark:text-primary-white">
                  {isMoreProfile ? <BsXLg size={'20'} /> : <BsGearFill size={'20'} />}
               </div>
            </div>
            {/* TeamSpace count info */}
            <div className={`${isMoreProfile ? moreStyle.show : moreStyle.hidden} flex gap-3 transition-all`}>
               <div className="flex grow flex-col gap-3 rounded-lg bg-light-bg1 p-1 dark:bg-dark-bg1">
                  <span className="text-primary-color">나의 TeamSpace</span>
                  <span className="text-primary-black dark:text-primary-white">{'250'}</span>
               </div>
               <div className="flex grow flex-col gap-3 rounded-lg bg-light-bg1 p-1 dark:bg-dark-bg1">
                  <span className="text-primary-color">참여중인 TeamSpace</span>
                  <span className="text-primary-black dark:text-primary-white">{'250'}</span>
               </div>
            </div>
         </div>
      </>
   );
};
