// npm
import { BsGearFill, BsXLg } from 'react-icons/bs';
// slice
import { useToogle } from './model/useToogle';
import { useProfileImg } from './model/useProfileImg';
// layer
import { useGetUsers } from '@entities/useGetUsers';
import { usePutUsersProfileImg } from '@entities/usePutUsersProfileImg';
import { RoundProfile } from '@shared/ui/RoundProfile';
import { useValidation } from '@shared/hooks/useValidation';
import { nickNameRegExp } from '@shared/consts/regExp';

export const UserInfo = () => {
   // ui
   const { inputRef, isValid, isCheckValidation } = useValidation(nickNameRegExp);
   const { toggleState, changeToggleState } = useToogle(inputRef);
   const { profileImgRef, profileImg, selectFile, cancelFile } = useProfileImg();
   // api
   const { profileInfo } = useGetUsers();
   const { putUsersProfileImg } = usePutUsersProfileImg();

   return (
      <>
         <div className="flex flex-col p-3">
            {/* 유저정보 영역 */}
            <div className="flex gap-2">
               {/* 유저 profileImg*/}
               <div className="w-12 h-12">
                  <RoundProfile imgUrl={profileImg.preview ?? profileInfo?.profileImage} />
               </div>
               <div className="flex flex-col justify-between gap-2 grow">
                  {/* 유저 email */}
                  <span className="text-shade_5">{profileInfo?.email}</span>
                  <div
                     className={`${toggleState.isNickNameInput && toggleState.isMoreInfo ? 'h-24' : 'h-4'} duration-200`}>
                     {toggleState.isNickNameInput && toggleState.isMoreInfo ? (
                        <div className='flex flex-col gap-1'>
                           <input
                              type="text"
                              ref={inputRef}
                              onChange={isCheckValidation}
                              defaultValue={profileInfo?.nickname}
                              placeholder="3글자 이상 ~ 10글자 이하"
                              className={`input-layout ${inputRef.current?.value && (isValid ? 'border-success' : 'border-error')}`}
                           />
                           {inputRef.current?.value && (
                              <p className={`text-xs ${isValid ? 'text-success' : 'text-error'}`}>
                                 {isValid ? '사용가능합니다' : '3글자 이상 ~ 10글자 이하'}
                              </p>
                           )}
                           <div className="flex justify-start gap-3 py-2">
                              <div>
                                 <button
                                    className={`button-layout ${isValid ? '_active' : '_disabled'} p-2 text-xs`}
                                    onClick={() => ''}>
                                    닉네임 저장
                                 </button>
                              </div>
                              <div>
                                 <button
                                    className="p-2 text-xs button-layout _default"
                                    onClick={() => changeToggleState('isNickNameInput')}>
                                    취소
                                 </button>
                              </div>
                           </div>
                        </div>
                     ) : (
                        // 유저 NickName
                        <span
                           className={`${toggleState.isNickNameInput && toggleState.isMoreInfo ? 'invisible max-h-0 opacity-0 duration-75' : 'visible max-h-20 py-2 opacity-100 duration-200'} text-primary transition-all`}>
                           {profileInfo?.nickname}
                        </span>
                     )}
                  </div>
                  <div
                     className={`${toggleState.isMoreInfo && !toggleState.isNickNameInput ? 'visible max-h-20 py-2 opacity-100 duration-200' : 'invisible max-h-0 opacity-0 duration-75'} flex gap-2 transition-all`}>
                     {profileImg.fileObj && profileImg.preview ? (
                        <>
                           <div>
                              <button className="p-2 text-xs button-layout _active" onClick={putUsersProfileImg}>
                                 이미지 저장
                              </button>
                           </div>
                           <div>
                              <button className="p-2 text-xs button-layout _default" onClick={cancelFile}>
                                 취소
                              </button>
                           </div>
                        </>
                     ) : (
                        <>
                           {/* 이미지 변경 버튼 */}
                           <div>
                              <label htmlFor="user_img" className="p-2 text-xs button-layout _active">
                                 이미지 변경
                              </label>
                              <input id="user_img" type="file" ref={profileImgRef} className="hidden" onChange={selectFile} />
                           </div>
                           {/* 이름 변경 버튼 */}
                           <div>
                              <button
                                 className="p-2 text-xs button-layout _active"
                                 onClick={() => changeToggleState('isNickNameInput')}>
                                 닉네임 변경
                              </button>
                           </div>
                        </>
                     )}
                  </div>
               </div>
               {/* 유저정보 더보기 버튼*/}
               <div
                  onClick={() => changeToggleState('isMoreInfo')}
                  className="flex items-center justify-end w-5 h-5 text-black cursor-pointer dark:text-white">
                  {toggleState.isMoreInfo ? <BsXLg size={'100%'} /> : <BsGearFill size={'100%'} />}
               </div>
            </div>
            {/* 유저이미 유효성검사 텍스트 */}
            {profileImg.errorType && <p className="text-xs text-error">{profileImg.errorType}</p>}

            {/* 유저 TeamSpace정보 영역*/}
            <div
               className={`${toggleState.isMoreInfo ? 'visible max-h-20 py-2 opacity-100 duration-200' : 'invisible max-h-0 opacity-0 duration-75'} flex gap-3 transition-all`}>
               <div className="flex flex-col gap-1 p-2 rounded-lg grow bg-shade_2">
                  <span className="text-sm text-primary">나의 TeamSpace</span>
                  <span className="text-black dark:text-white">{profileInfo?.teamSpaceOwnCount}</span>
               </div>
               <div className="flex flex-col gap-1 p-2 rounded-lg grow bg-shade_2">
                  <span className="text-sm text-primary">참여중인 TeamSpace</span>
                  <span className="text-black dark:text-white">{profileInfo?.teamSpaceCount}</span>
               </div>
            </div>
         </div>
      </>
   );
};
