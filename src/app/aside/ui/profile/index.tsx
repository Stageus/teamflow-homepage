import { useRef, useState } from 'react';
import { BsGearFill, BsXLg } from 'react-icons/bs';
import { DefaultButton } from '@shared/ui';
import testImg from '@shared/assets/고양이.jpeg';
export const Profile = () => {

   const [moreProfile, setMoreProfile] = useState<boolean>(false);
   const onClickOpenMoreProfile = () => setMoreProfile(!moreProfile);

   const inputFileRef = useRef(null);

   const onClickFile = () => {

    if(inputFileRef.current){
        inputFileRef.current.click();
    }
   }

   const moreStyle = {
      show: 'translate-y-full opacity-100 visible',
      hidden: 'translate-y-3/4 opacity-0 invisible',
   };

   return (
      <>
         <div className="flex flex-col gap-2 relative p-3">
            <div className="flex gap-2">
               <div className="w-[50px] h-[50px] flex justify-center items-center text-primary-gray">
                  <img src={testImg} className="w-full h-full rounded-full"></img>
               </div>
               <div className="flex justify-between flex-col flex-grow">
                  <span className="text-primary-gray">userEmail@gmail.com</span>
                  <span className="text-primary-color">테스트유저 닉네임</span>
                  <div className='flex gap-2'>
                    <div><DefaultButton
                    type='active'
                    text='이미지변경'
                    onClick={onClickFile}
                    /></div>
                    <div><DefaultButton
                    type='active'
                    text='닉네임변경'
                    onClick={()=> console.log("input창 오픈")}
                    /></div>
                    <input
                    type='file'
                    ref={inputFileRef}
                    className='hidden'
                    />
                  </div>
               </div>
               <div
                  onClick={onClickOpenMoreProfile}
                  className="w-[50px] h-[50px] flex justify-end items-center text-primary-black dark:text-primary-white cursor-pointer">
                  {moreProfile ? <BsXLg size={'25'} /> : <BsGearFill size={'25'} />}
               </div>
            </div>
            <div className={`${moreProfile ? moreStyle.show : moreStyle.hidden} flex gap-2 absolute top-0 left-0 right-0 p-2 bg-light-bg2 dark:bg-dark-bg2 transition-transform`}>
                  <div className="grow flex flex-col gap-3 bg-light-bg1 dark:bg-dark-bg1 rounded-lg p-1">
                     <span className="text-primary-color">나의 TeamSpace</span>
                     <span className='text-primary-black dark:text-primary-white'>250</span>
                  </div>
                  <div className="grow flex flex-col gap-3 bg-light-bg1 dark:bg-dark-bg1 rounded-lg p-1">
                     <span className="text-primary-color">참여중인 TeamSpace</span>
                     <span className='text-primary-black dark:text-primary-white'>250</span>
                  </div>
            </div>
         </div>
      </>
   );
};
