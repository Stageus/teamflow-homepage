import { BsGearFill, BsXLg } from 'react-icons/bs';
import { useMoreProfile } from './model/useMoreProfile';
import { useProfileImg } from './model/useProfileImg';
import { DefaultButton } from '@shared/ui';
import testImg from '@shared/assets/고양이.jpeg';
export const Profile = () => {
   const { moreProfile, onClickOpenMoreProfile } = useMoreProfile();
   const { inputFileRef, onClickFile } = useProfileImg();

   const moreStyle = {
      show: 'max-h-20 opacity-100 visible duration-300',
      hidden: 'max-h-0 opacity-0 invisible duration-300',
   };

   return (
      <>
         <div className="flex flex-col gap-2 relative p-3">
            <div className="flex gap-2">
               <div className="w-[50px] h-[50px] flex justify-center items-center text-primary-gray">
                  <img src={testImg} className="w-full h-full rounded-full"></img>
               </div>
               <div className="flex justify-between flex-col gap-2 flex-grow">
                  <span className="text-primary-gray">userEmail@gmail.com</span>
                  <span className="text-primary-color">테스트유저 닉네임</span>
                  <div className={`${moreProfile ? moreStyle.show : moreStyle.hidden} flex gap-2`}>
                     <div>
                        <DefaultButton size="xs" type="active" text="이미지변경" onClick={onClickFile} />
                     </div>
                     <div>
                        <DefaultButton
                           size="xs"
                           type="active"
                           text="닉네임변경"
                           onClick={() => console.log('input창 오픈')}
                        />
                     </div>
                     <input type="file" ref={inputFileRef} className="hidden" />
                  </div>
               </div>
               <div
                  onClick={onClickOpenMoreProfile}
                  className="w-[50px] h-[50px] flex justify-end items-center text-primary-black dark:text-primary-white cursor-pointer">
                  {moreProfile ? <BsXLg size={'25'} /> : <BsGearFill size={'25'} />}
               </div>
            </div>
            <div
               className={`${
                  moreProfile ? moreStyle.show : moreStyle.hidden
               } flex gap-2 absolute bottom-0 left-0 right-0 p-2 bg-light-bg2 dark:bg-dark-bg2 translate-y-full transition-all `}>
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
