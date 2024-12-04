import { useState, useRef } from 'react';
import { nickNameRegExp } from '@/shared/consts/regExp';

export const useNickname = () => {
   const nickNameRef = useRef(null);
   const [isNickName, setIsNickName] = useState(null);
   const checkNickName = () => {
      if (nickNameRegExp.test(nickNameRef.current.value)) setIsNickName(true);
      if (!nickNameRegExp.test(nickNameRef.current.value)) setIsNickName(false);
   };

   return { nickNameRef, isNickName, checkNickName };
};
