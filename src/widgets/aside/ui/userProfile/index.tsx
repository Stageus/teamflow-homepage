// npm
import { Cross1Icon, GearIcon } from '@radix-ui/react-icons';
// slice
import { useToogle } from './model/useToogle';
import { useProfileImg } from './model/useProfileImg';
// layer
import { useGetUsers } from '@/entities/useGetUsers';
import { usePutUsersProfileImg } from '@/entities/usePutUsersProfileImg';
import { RoundProfile } from '@/shared/ui/RoundProfile';
import { useValidation } from '@/shared/hooks/useValidation';
import { nickNameRegExp } from '@/shared/consts/regExp';
import { cn } from '@/shared/lib/cn';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export const UserProfile = () => {
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
                     className={cn('h-4 duration-200', {
                        'h-24': toggleState.isNickNameInput && toggleState.isMoreInfo,
                     })}>
                     {toggleState.isNickNameInput && toggleState.isMoreInfo ? (
                        <div className="flex flex-col gap-1">
                           <Input
                              type="text"
                              ref={inputRef}
                              onChange={isCheckValidation}
                              defaultValue={profileInfo?.nickname}
                              placeholder="3글자 이상 ~ 10글자 이하"
                              className={cn(
                                 { 'border-success': inputRef.current?.value && isValid },
                                 { 'border-error': inputRef.current?.value && !isValid },
                              )}
                           />
                           {inputRef.current?.value && (
                              <p className={`text-xs ${isValid ? 'text-success' : 'text-error'}`}>
                                 {isValid ? '사용가능합니다' : '3글자 이상 ~ 10글자 이하'}
                              </p>
                           )}
                           <div className="flex justify-start gap-3 py-2">
                              <Button variant={isValid ? 'select' : 'disabeld'} sizes="sm">
                                 닉네임 저장
                              </Button>
                              <Button sizes="sm" onClick={() => changeToggleState('isNickNameInput')}>
                                 취소
                              </Button>
                           </div>
                        </div>
                     ) : (
                        // 유저 NickName
                        <span
                           className={cn('visible max-h-20 py-2 text-primary opacity-100 transition-all duration-200', {
                              'invisible max-h-0 opacity-0 duration-75':
                                 toggleState.isNickNameInput && toggleState.isMoreInfo,
                           })}>
                           {profileInfo?.nickname}
                        </span>
                     )}
                  </div>
                  <div
                     className={cn('invisible flex max-h-0 gap-2 opacity-0 transition-all duration-75', {
                        'visible max-h-20 py-2 opacity-100 duration-200':
                           toggleState.isMoreInfo && !toggleState.isNickNameInput,
                     })}>
                     {profileImg.fileObj && profileImg.preview ? (
                        <>
                           <Button variant="select" onClick={putUsersProfileImg}>
                              이미지 저장
                           </Button>
                           <Button onClick={cancelFile}>취소</Button>
                        </>
                     ) : (
                        <>
                           {/* 이미지 변경 버튼 */}
                           <Button asChild={true} variant="select" sizes="sm">
                              <div>
                                 <label htmlFor="user_img">이미지 변경</label>
                                 <input
                                    id="user_img"
                                    type="file"
                                    ref={profileImgRef}
                                    className="hidden"
                                    onChange={selectFile}
                                 />
                              </div>
                           </Button>
                           {/* 이름 변경 버튼 */}
                           <Button variant="select" sizes="sm" onClick={() => changeToggleState('isNickNameInput')}>
                              닉네임 변경
                           </Button>
                        </>
                     )}
                  </div>
               </div>
               {/* 유저정보 더보기 버튼*/}
               <div
                  onClick={() => changeToggleState('isMoreInfo')}
                  className="flex items-center justify-end w-5 h-5 text-black cursor-pointer dark:text-white">
                  {toggleState.isMoreInfo ? (
                     <Cross1Icon className={'h-full w-full'} />
                  ) : (
                     <GearIcon className={'h-full w-full'} />
                  )}
               </div>
            </div>
            {/* 유저이미 유효성검사 텍스트 */}
            {profileImg.errorType && <p className="text-xs text-error">{profileImg.errorType}</p>}

            {/* 유저 TeamSpace정보 영역*/}
            <div
               className={cn('invisible flex max-h-0 gap-3 opacity-0 transition-all duration-75 text-black dark:text-white', {
                  'visible max-h-20 py-2 opacity-100 duration-200': toggleState.isMoreInfo,
               })}>
               <div className="flex flex-col gap-1 p-2 rounded-lg grow bg-shade_2">
                  <span className="text-sm text-primary">나의 TeamSpace</span>
                  <span>{profileInfo?.teamSpaceOwnCount}</span>
               </div>
               <div className="flex flex-col gap-1 p-2 rounded-lg grow bg-shade_2">
                  <span className="text-sm text-primary">참여중인 TeamSpace</span>
                  <span>{profileInfo?.teamSpaceCount}</span>
               </div>
            </div>
         </div>
      </>
   );
};
