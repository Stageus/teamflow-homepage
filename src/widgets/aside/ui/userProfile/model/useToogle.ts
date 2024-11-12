import { useState, useEffect, RefObject } from 'react';
import { produce } from 'immer';

interface ToogleStateObject {
   isNickNameInput: boolean;
   isMoreInfo: boolean;
}

type UiStateKeys = keyof ToogleStateObject;

/**
 * @param props - focus될 input ref입니다.
 * @returns**toggleState:** isNickNameInput, isMoreInfo을 가지는 object입니다.
 * @returns**changeToggleState:** key를 받아 상태를 변경하는 함수입니다.
 * @example - const { toggleState, changeToggleState } = useToogle(inputRef);
 */

export const useToogle = (props: RefObject<HTMLInputElement>) => {
   const ref = props;
   const [toggleState, setToggleState] = useState<ToogleStateObject>({
      isNickNameInput: false,
      isMoreInfo: false,
   });

   const changeToggleState = (key: UiStateKeys) => {
      setToggleState(
         produce(draft => {
            draft[key] = !draft[key];
            if (key === 'isMoreInfo') {
               draft.isNickNameInput = false;
            }
         }),
      );
   };

   useEffect(() => {
      if (toggleState.isNickNameInput) {
         ref.current.focus();
      }
   }, [toggleState.isNickNameInput]);

   return { toggleState, changeToggleState };
};
