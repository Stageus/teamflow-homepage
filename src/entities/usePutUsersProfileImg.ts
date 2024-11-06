import { useState } from 'react';
import { produce } from 'immer';

interface ProfileImgObject {
   preview: string | null;
   fileObj: File | null;
   errorType: string | null;
}

export const usePutUsersProfileImg = () => {
   const [profileImg, setProfileImg] = useState<ProfileImgObject>({
      preview: null,
      fileObj: null,
      errorType: null,
   });
   // 파일크기
   const fileSize = 30 * 1024;
   // 파일타입
   const fileType = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

   const putUsersProfileImg = () => {
      if (!profileImg.fileObj) return;
      // 파일크기 초과할경우 errorType update
      if (profileImg.fileObj.size > fileSize)
         return setProfileImg(
            produce(draft => {
               draft.errorType = '파일크기는 30KB를 초과할수 없습니다.';
            }),
         );
      // 파일크기 type이 안맞을경우 errorType update
      if (!fileType.includes(profileImg.fileObj.type))
         return setProfileImg(
            produce(draft => {
               draft.errorType = 'jpg, jpeg, png, gif 형식의 파일만 가능합니다.';
            }),
         );
      setProfileImg(
         produce(draft => {
            draft.fileObj = null;
         }),
      );
   };

   const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.files[0];
      if (!target) return;
      // 파일크기 초과할경우 errorType update
      if (target.size > fileSize)
         return setProfileImg(
            produce(draft => {
               draft.errorType = '파일크기는 30KB를 초과할수 없습니다.';
            }),
         );
      // 파일크기 type이 안맞을경우 errorType update
      if (!fileType.includes(target.type))
         return setProfileImg(
            produce(draft => {
               draft.errorType = 'jpg, jpeg, png, gif 형식의 파일만 가능합니다.';
            }),
         );
      setProfileImg(
         produce(draft => {
            draft.preview = URL.createObjectURL(target);
            draft.fileObj = target;
         }),
      );
   };

   const cancelFile = () => {
      setProfileImg(
         produce(draft => {
            draft.preview = null;
         }),
      );
   };

   return { profileImg, selectFile, cancelFile, putUsersProfileImg };
};
