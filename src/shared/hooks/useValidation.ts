import { useState, useRef } from 'react';

export const useValidation = (validationPattern: RegExp): ValidationType=> {
   const inputRef = useRef(null);
   const [validationResult, setValidationResult] = useState(null);

   const isCheckValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.value;
      const isValidation = validationPattern.test(target);
      setValidationResult(isValidation);
   };

   return { 
      inputRef,
      validationResult, 
      isCheckValidation 
   }
};

type ValidationType = {
   inputRef: React.RefObject<HTMLInputElement | null>;
   validationResult: boolean | null;
   isCheckValidation: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & {};