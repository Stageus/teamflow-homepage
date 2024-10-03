import { useRef } from 'react';
import { useState } from 'react';

export const useValidation = ( regex: RegExp ) => {
   const inputRef = useRef<null | HTMLInputElement>(null);
   const [checkInput, setCheckInput] = useState<null | boolean>(null);

   const nameValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.value;
      const isValidation = regex.test(target);
      setCheckInput(isValidation);
   };
   return { inputRef, checkInput, nameValidation };
};
