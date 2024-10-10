import { useState, useRef } from 'react';

export const useNameValidation = () => {
   const regex = /^[가-힣a-zA-Z0-9]{3,10}$/;
   const inputRef = useRef<null | HTMLInputElement>(null);
   const [isValid, setIsValid] = useState<null | boolean>(null);

   const handlerValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.value;
      const isValidation = regex.test(target);
      setIsValid(isValidation);
   };
   return { inputRef, isValid, handlerValidation };
};
