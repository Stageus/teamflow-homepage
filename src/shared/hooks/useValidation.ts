import { useState, useRef, useEffect } from 'react';

/**
 * @param props - 사용할 정규표현식입니다.
 * @returns**inputRef:** 참고할 input의 Ref 입니다.
 * @returns**isValid:** 정규표현식의 통과 여부를 반환하는 boolean입니다.
 * @returns**isCheckValidation:** input value가 정규표현식여부를 통과를 체크하는 함수입니다.
 * @example - { inputRef, isValid, isCheckValidation } = useValidation(RegExp)
 * @example - <input ref={inputRef} onEvent={isCheckValidation}/>..
 */

export const useValidation = (props: RegExp) => {
   const RegExp = props;
   const inputRef = useRef<HTMLInputElement>(null);
   const [isValid, setIsValid] = useState<boolean>(false);

   const isCheckValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.value;
      const isValidation = RegExp.test(target);
      console.log(inputRef.current)
      setIsValid(isValidation);
   };

   return { inputRef, isValid, isCheckValidation };
};

/*
   현재 해당 hook을 modal에서 가져다 쓰면 state가 초기화 되지 않아 모달을 닫고 나시 
   값을 입력하기 시작한다면 상태가 변경되지 않아 인식되지않음


   input은 존재하나 input.current가 존재해도 상태 업데이트가 일어나지 않아서 css가 바로적용되지 않는다
   그렇기에 input을 가지고 css를 변화시킨다는것은 좋지 못한 방법인것 같다.
   그렇다면 isValid를 가지고 상태를 업데이트하거나 해야하는데
*/
