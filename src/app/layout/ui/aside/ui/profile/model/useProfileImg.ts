import { useRef } from 'react';

export const useProfileImg = () => {
   const inputFileRef = useRef(null);
   const onClickFile = () => {
      if (inputFileRef.current) {
         inputFileRef.current.click();
      }
   };

   return { inputFileRef, onClickFile };
};
