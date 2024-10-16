import { useState } from 'react';

export const useValidation = ( props: {regex: RegExp}) => {
   const { regex } = props;
   const [isValid, setIsValid] = useState<null | boolean>(null);

   const handlerValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.value;
      const isValidation = regex.test(target);
      setIsValid(isValidation);
   };
   return { isValid, handlerValidation };
};
