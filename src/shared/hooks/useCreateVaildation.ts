import { useState, useRef } from 'react';

export const useCreateValidation = () => {
   const regex = /^[가-힣a-zA-Z0-9]{5,20}$/;
   const inputRef = useRef<null | HTMLInputElement>(null);
   const [isValid, setIsValid] = useState<null | boolean>(null);

   const handlerValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.value;
      const isValidation = regex.test(target);
      setIsValid(isValidation);
   };
   return { inputRef, isValid, handlerValidation };
};
