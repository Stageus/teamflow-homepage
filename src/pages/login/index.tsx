// slice
import googleLogo from './assets/google.svg';
// layer
import serviceLogo from '@/shared/assets/logo.svg';
import { useRoute } from '@/shared/hooks/useRoute';
import { Button } from '@/shared/ui/Button';
import { useCookie } from '@/shared/hooks/useCookie';
import { useEffect } from 'react';

export const Login = () => {
   const { signupRoute, teamspaceListRoute } = useRoute();
   const { cookies } = useCookie('token');

   /*
      token에 따른 페이지 전환
      login 페이지에 들어올때마다 token의 유무를 판단하고, 해당 token을 서버에 응답으로
      정상적인 token인지 판단하여 리다이렉트를 해준다.
      *로그인 유지가 없는데 판단할 필요가 있을까? 
   */
   useEffect(()=>{
      if (cookies.token) return teamspaceListRoute();
   },[])

   // title
   document.title = '로그인';

   return (
      <main className="flex items-center justify-center h-full gradient-light dark:gradient-dark">
         <div className="flex flex-col items-center gap-3 p-10 rounded-lg shadow-xl">
            <div className="w-20 h-20">
               <img src={serviceLogo} />
            </div>
            <h1 className="italic">TeamFlow</h1>
            <h2 className="text-shade_5">TeamFlow에 오신것을 환영합니다!</h2>
            <Button variant="select" className="w-full gap-3" onClick={signupRoute}>
               <img src={googleLogo} className="w-6 h-6" />
               <span>Google 로그인</span>
            </Button>
         </div>
      </main>
   );
};
