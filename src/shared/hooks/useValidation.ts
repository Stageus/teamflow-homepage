import { useState, useRef } from 'react';

/**
 * @param props - 사용할 정규표현식입니다.
 * @returns**inputRef:** 참고할 input의 Ref 입니다.
 * @returns**isValid:** 정규표현식의 통과 여부를 반환하는 boolean입니다.
 * @returns**isCheckValidation:** input value가 정규표현식여부를 통과를 체크하는 함수입니다.
 * @example - <input ref={inputRef} onEvent={isCheckValidation}/>..
 */

export const useValidation = (props: RegExp) => {
   const RegExp = props;
   const inputRef = useRef<HTMLInputElement>(null);
   const [isValid, setIsValid] = useState<null | boolean>(null);

   const isCheckValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.value;
      const isValidation = RegExp.test(target);
      setIsValid(isValidation);
   };

   return { inputRef, isValid, isCheckValidation };
};
