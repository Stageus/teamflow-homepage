import { DefaultButton } from '@shared/ui';

export const Login = () => {
   return (
      <div className="h-full flex justify-center items-center gradient-light dark:gradient-dark">
         <div className="flex flex-col items-center gap-5 px-10 py-5 bg-light-bg2 dark:bg-dark-bg2 rounded-lg">
            <div>
               <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="50" transform="matrix(-1 0 0 1 100 0)" fill="#3578FF" />
                  <path
                     d="M49.9287 36.25H53.4787C55.3454 36.25 56.8454 36.7167 57.9787 37.65C59.112 38.5833 59.8787 40.1167 60.2787 42.25H61.7787L61.0287 38C60.7954 36.8 60.312 35.8333 59.5787 35.1C58.8454 34.3667 57.6787 34 56.0787 34H32.5787L32.9787 36.25H43.4287L48.8287 67H55.3287L49.9287 36.25Z"
                     fill="#FAFAFA"
                  />
               </svg>
            </div>
            <h1 className="italic">TeamFlow</h1>
            <h2>TeamFlow에 오신것을 환영합니다</h2>
            <DefaultButton text="Google 로그인" type="active" onClick={() => console.log('회원가입페이지 이동')} />
         </div>
      </div>
   );
};
