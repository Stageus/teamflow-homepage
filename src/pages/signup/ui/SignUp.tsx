import { useNameValidation } from "@shared/hooks/useNameVaildation";

import { useRoute } from '@shared/hooks';

export const SignUp = () => {
   const { loginRoute, teamspaceListRoute } = useRoute();
   const { inputRef, isValid, handlerValidation } = useNameValidation();

   return (
      <div className="gradient-light dark:gradient-dark flex h-screen items-center justify-center">
         <div className="flex min-h-[300px] min-w-[400px] flex-col items-center justify-center gap-5 rounded-lg bg-transparent px-10 py-5 shadow-xl">
            <div>
               <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="50" transform="matrix(-1 0 0 1 100 0)" fill="#3578FF" />
                  <path
                     d="M49.9287 36.25H53.4787C55.3454 36.25 56.8454 36.7167 57.9787 37.65C59.112 38.5833 59.8787 40.1167 60.2787 42.25H61.7787L61.0287 38C60.7954 36.8 60.312 35.8333 59.5787 35.1C58.8454 34.3667 57.6787 34 56.0787 34H32.5787L32.9787 36.25H43.4287L48.8287 67H55.3287L49.9287 36.25Z"
                     fill="#FAFAFA"
                  />
               </svg>
            </div>
            <h1>닉네임 생성</h1>
            <div className="flex w-full flex-col items-center gap-4">
               {/* need a response data */}
               <h2 className="text-shade_5">{'useEmail@gmail.com'}</h2>
               <div className="input-form">
                  <input
                     className="form_input"
                     placeholder="3글자 이상 ~ 10글자 이하 (한글/영어/숫자)만 가능합니다"
                     type="text"
                     ref={inputRef}
                     onChange={handlerValidation}
                  />
                  <span className={`${isValid ? 'text-success' : 'text-error'} form_text`}>
                     {isValid !== null &&
                        (isValid ? '사용가능합니다' : '3글자 이상 ~ 10글자 이하 (한글/영어/숫자)만 가능합니다')}
                  </span>
               </div>
               <div className="flex justify-center gap-5">
                  <button
                     className={`button-layout ${isValid ? '_active' : '_disabled'}`}
                     onClick={isValid ? teamspaceListRoute : null}>
                     가입하기
                  </button>
                  <button className="button-layout _default" onClick={loginRoute}>
                     뒤로가기
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
