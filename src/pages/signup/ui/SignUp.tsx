import { useState, useRef } from 'react';
import { DefaultButton } from '@shared/ui';
import { useRoute } from '@shared/hooks';

type checkNickNameType = boolean | null;

export const SignUp = () => {
   const { teamspaceListRoute, loginRoute } = useRoute();

   const nickNameRef = useRef(null);
   const [checkNickName, setCheckNickName] = useState<checkNickNameType>(null);
   const regex = /^[가-힣a-zA-Z0-9]{3,10}$/;

   const nameValidation = (nickNameInput: React.ChangeEvent<HTMLInputElement>) => {
      const target = nickNameInput.target.value;
      const isNickName = regex.test(target);

      if ( isNickName ) setCheckNickName(true);
      if ( !isNickName ) setCheckNickName(false);
   };

   return (
      <div className="h-full flex justify-center items-center gradient-light dark:gradient-dark">
         <div className="flex flex-col justify-center items-center gap-5 px-10 py-5 bg-transparent rounded-lg shadow-xl min-w-[400px] min-h-[300px]">
            <h1>닉네임 생성</h1>
            <h2>userEmail@gmail.com</h2>

            <div className="w-full flex flex-col gap-2">
               <input
                  className={`bg-transparent border-b-2 text-size-body outline-none 
                    ${checkNickName === true && 'border-success-color'}
                    ${checkNickName === false && 'border-danger-color'}`}
                  placeholder="3글자 이상 ~ 10글자 이하 (한글/영어/숫자)"
                  type="text"
                  ref={nickNameRef}
                  onChange={nameValidation}
               />
               {nickNameRef.current?.value && checkNickName === false && (
                  <span className="text-danger-color text-size-xs">
                     3글자 이상 ~ 10글자 이하 한글/영어/숫자만 가능합니다
                  </span>
               )}
               {nickNameRef.current?.value && checkNickName === true && (
                  <span className="text-success-color text-size-xs">사용할수 있는 닉네임입니다</span>
               )}
            </div>
            <div className="flex gap-5">
               <DefaultButton
                  type={checkNickName ? 'active' : 'disabled'}
                  text="가입하기"
                  onClick={teamspaceListRoute}
               />
               <DefaultButton type="default" text="뒤로가기" onClick={loginRoute} />
            </div>
         </div>
      </div>
   );
};
