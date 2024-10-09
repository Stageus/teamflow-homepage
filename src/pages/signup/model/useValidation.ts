import { useRef } from 'react';
import { useState } from 'react';

export const useValidation = () => {
   const regex = /^[가-힣a-zA-Z0-9]{3,10}$/;
   const inputRef = useRef<null | HTMLInputElement>(null);
   const [checkInput, setCheckInput] = useState<null | boolean>(null);

   const nameValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.value;
      const isValidation = regex.test(target);
      setCheckInput(isValidation);
   };
   return { inputRef, checkInput, nameValidation };
};
