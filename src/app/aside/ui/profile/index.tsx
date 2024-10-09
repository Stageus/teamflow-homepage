import { BsGearFill, BsXLg } from 'react-icons/bs';
import { useMoreProfile } from './model/useMoreProfile';
import { useProfileImg } from './model/useProfileImg';
import { useChangeName } from './model/useChangeName';
import { TextInput } from '@features/textInput';
import { DefaultButton } from '@shared/ui';
import testImg from '@shared/assets/고양이.jpeg';
export const Profile = () => {
   const { isMoreProfile, onClickOpenMoreProfile } = useMoreProfile();
   const { inputFileRef, onClickFile } = useProfileImg();
   const { isChangeName, changeTag } = useChangeName();

   const moreStyle = {
      show: 'max-h-20 opacity-100 visible duration-300 py-2',
      hidden: 'max-h-0 opacity-0 invisible duration-300',
   };

   const nameInputStyle = {
      show: 'h-32 duration-500',
      hidden: 'h-4 duration-500',
   }

   return (
      <>
         <div className={`flex flex-col p-3 `}>
            <div className="flex gap-2">
               <div className="w-[50px] h-[50px] flex justify-center items-center text-primary-gray">
                  <img src={testImg} className="w-full h-full rounded-full"></img>
               </div>
               <div className="flex justify-between flex-col flex-grow gap-2">
                  <span className="text-primary-gray">userEmail@gmail.com</span>
                  <div className={`${isChangeName && isMoreProfile ? nameInputStyle.show : nameInputStyle.hidden} transition-all`}>
                     {isChangeName && isMoreProfile ? (
                        <TextInput
                           title=""
                           regex={/^[가-힣a-zA-Z0-9]{3,10}$/}
                           errorText="실패 텍스트"
                           placeholder="이전닉네임"
                           nextName="저장"
                           nextCallback={() => console.log('저장시')}
                           cancellName="취소"
                           cancellCallback={changeTag}
                        />
                     ) : (
                        <span className={`${isChangeName && isMoreProfile ? moreStyle.hidden : moreStyle.show } text-primary-color transition-all`}>테스트유저 닉네임</span>
                     )}
                  </div>
                  <div className={`${isMoreProfile && !isChangeName ? moreStyle.show : moreStyle.hidden} flex gap-2 transition-all`}>
                     <div>
                        <DefaultButton size="xs" type="active" text="이미지변경" onClick={onClickFile} />
                     </div>
                     <div>
                        <DefaultButton size="xs" type="active" text="닉네임변경" onClick={changeTag} />
                     </div>
                     <input type="file" ref={inputFileRef} className="hidden" />
                  </div>
               </div>
               <div
                  onClick={onClickOpenMoreProfile}
                  className="w-[50px] h-[50px] flex justify-end items-center text-primary-black dark:text-primary-white cursor-pointer">
                  {isMoreProfile ? <BsXLg size={'25'} /> : <BsGearFill size={'25'} />}
               </div>
            </div>
            <div
               className={`${isMoreProfile ? moreStyle.show : moreStyle.hidden} flex gap-3 transition-all`}>
               <div className="grow flex flex-col gap-3 bg-light-bg1 dark:bg-dark-bg1 rounded-lg p-1">
                  <span className="text-primary-color">나의 TeamSpace</span>
                  <span className="text-primary-black dark:text-primary-white">250</span>
               </div>
               <div className="grow flex flex-col gap-3 bg-light-bg1 dark:bg-dark-bg1 rounded-lg p-1">
                  <span className="text-primary-color">참여중인 TeamSpace</span>
                  <span className="text-primary-black dark:text-primary-white">250</span>
               </div>
            </div>
         </div>
      </>
   );
};
