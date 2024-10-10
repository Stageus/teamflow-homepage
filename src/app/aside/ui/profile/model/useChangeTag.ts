import { useState } from 'react';
export const useChangeTag = () => {
   const [isChangeTag, setIsChangeTag] = useState<boolean>(false);
   const changeTag = () => setIsChangeTag(!isChangeTag);

   return { isChangeTag, changeTag };
};
