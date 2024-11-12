import { useRef, useState } from 'react';
import { produce } from 'immer';

interface ProfileImgObject {
   preview: string | null;
   fileObj: File | null;
   errorType: string | null;
}

/**
 * @returns **profileImgRef:** 유효성 검사 실패시 input을 초기화 하기 위한 ref입니다..
 * @returns **profileImg:** preview, fileObj, errorType 담은 Object 입니다.
 * - preview: 선택된 file객체를 url주소로 변경한 프로퍼티 입니다.
 * - fileObj: 선택된 file객체를 담은 프로퍼티 입니다.
 * - errorType: 유효성검사여부에 따른 메세지를 담은 프로퍼티 입니다..
 * @returns **selectFile:** 실행시 File객체에 따라 profileImg state를 변경하는 함수입니다.
 * @returns **cancelFile:** 실행시 preview를 상태를 변경합니다.
 * @example - const { profileImg, selectFile, cancelFile } = useProfileImg();
 * @example - <button onClick={cancelFile}>
 * @example - <input ref={profileImgRef} type="file" onChange={selectFile} />
 */

export const useProfileImg = () => {
   const fileSize = 30 * 1024; // 파일크기
   const profileImgRef = useRef(null);
   const fileType = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']; // 파일타입
   const [profileImg, setProfileImg] = useState<ProfileImgObject>({
      preview: null,
      fileObj: null,
      errorType: null,
   });


   const profileImgErrorType = (message: string) => {
      setProfileImg(
         produce(draft => {
            draft.errorType = message;
         }),
      );
      setTimeout(() => {
         setProfileImg(
            produce(draft => {
               draft.errorType = null;
            }),
         );
      }, 2000);
   };

   const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.files[0];
      if (!target) return;
      // 파일 크기 검증
      if (target.size > fileSize) {
         profileImgErrorType('파일크기는 30KB를 초과할수 없습니다.');
         profileImgRef.current.value = ''; 
         return;
      }

      // 파일 타입 검증
      if (!fileType.includes(target.type)) {
         profileImgErrorType('jpg, jpeg, png, gif 형식의 파일만 가능합니다.');
         profileImgRef.current.value = ''; 
         return;
      }
      setProfileImg(
         produce(draft => {
            draft.preview = URL.createObjectURL(target);
            draft.fileObj = target;
            draft.errorType = null;
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

   return { profileImgRef, profileImg, selectFile, cancelFile };
};
