import { useRef } from 'react';
import { TextInput } from '@features/textInput';
import { useRoute } from '@shared/hooks';
import serviceLogo from '@shared/assets/logo.svg';

export const SignUp = () => {
   const inputRef = useRef(null);
   const { loginRoute, teamspaceListRoute } = useRoute();

   return (
      <div className="gradient-light dark:gradient-dark flex h-screen items-center justify-center">
         <div className="flex min-h-[300px] min-w-[400px] flex-col items-center justify-center gap-5 rounded-lg bg-transparent px-10 py-5 shadow-xl">
            <div className="h-20 w-20">
               <img src={serviceLogo} />
            </div>
            <h1>닉네임 생성</h1>
            {/* data  binding*/}
            <h2 className="text-shade_5">{'useEmail@gmail.com'}</h2>
            <div className="w-full">
               {/* data  binding*/}
               <TextInput
                  inputRef={inputRef}
                  placeholder="3글자 이상 ~ 10글자 이하 (한글/영어/숫자)만 가능합니다"
                  nextName="가입하기"
                  nextCallback={teamspaceListRoute}
                  cancellName="뒤로가기"
                  cancellCallback={loginRoute}
                  regex={/^[가-힣a-zA-Z0-9]{3,10}$/}
                  regexText="3글자 이상 ~ 10글자 이하 (한글/영어/숫자)만 가능합니다"
               />
            </div>
         </div>
      </div>
   );
};
