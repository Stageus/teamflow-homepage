import { useState, useRef } from 'react';

type ValidationType = {
   inputRef: React.RefObject<HTMLInputElement | null>;
   validationResult: boolean | null;
   isCheckValidation: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & {};

/**
 * useValidation 훅은 주어진 정규 표현식을 사용하여 input 값의 유효성을 검사하는 기능을 제공합니다.
 * @param validationPattern 검사할 정규표현식 입니다.
 * @property inputRef: 해당 `input` 태그에 대한 참조를 반환합니다.
 * @property validationResult: 유효성 검사 결과입니다. `true`이면 유효하고, `false`이면 유효하지 않으며, 초기값은 `null`입니다.
 * @property isCheckValidation: 유효성 검사를 수행하는 함수입니다. 해당 이벤트에서 입력값을 가져와 검사합니다.
 * @example
 * const { inputRef, validationResult, isCheckValidation } = useValidation(/^[a-zA-Z0-9]{3,10}$/);
 */

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
   };
};
