import googleLogo from '../assets/google.svg';
import serviceLogo from '@shared/assets/logo.svg';
import { useRoute } from '@shared/hooks/useRoute';

export const Login = () => {
   const { signupRoute } = useRoute();

   return (
      <div className="gradient-light dark:gradient-dark flex h-screen items-center justify-center">
         <div className="flex min-h-[300px] min-w-[300px] flex-col items-center justify-center gap-5 rounded-lg bg-transparent px-10 py-5 shadow-xl">
            <div className="h-20 w-20">
               <img src={serviceLogo} />
            </div>
            <h1 className="italic">TeamFlow</h1>
            <h2 className="text-shade_5">TeamFlow에 오신것을 환영합니다!</h2>
            <button className="button-layout _active" onClick={signupRoute}>
               <div className="h-6 w-6">
                  <img src={googleLogo} />
               </div>
               <span>Google 로그인</span>
            </button>
         </div>
      </div>
   );
};
