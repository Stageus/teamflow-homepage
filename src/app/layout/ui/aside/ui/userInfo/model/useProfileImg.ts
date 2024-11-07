import { useState } from 'react';
import { produce } from 'immer';

interface ProfileImgObject {
   preview: string | null;
   fileObj: File | null;
   errorType: string | null;
}

/**
 * @returns **profileImg:** preview, fileObj, errorType 담은 Object 입니다.
 * - preview: 선택된 file객체를 url주소로 변경한 프로퍼티 입니다.
 * - fileObj: 선택된 file객체를 담은 프로퍼티 입니다.
 * - errorType: 유효성검사여부에 따른 메세지를 담은 프로퍼티 입니다..
 * @returns **selectFile:** 실행시 File객체에 따라 profileImg state를 변경하는 함수입니다. 
 * @returns **cancelFile:** 실행시 preview를 상태를 변경합니다.
 * @example - const { profileImg, selectFile, cancelFile } = useProfileImg(); 
 * @example - <button onClick={cancelFile}>
 * @example - <input type="file" onChange={selectFile} /> 
*/

export const useProfileImg = () => {
   const fileSize = 30 * 1024; // 파일크기
   const fileType = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']; // 파일타입
   const [profileImg, setProfileImg] = useState<ProfileImgObject>({
      preview: null,
      fileObj: null,
      errorType: null,
   });

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

   return { profileImg, selectFile, cancelFile };
};
