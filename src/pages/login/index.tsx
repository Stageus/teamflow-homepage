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

   useEffect(() => {
      if (cookies.token) return teamspaceListRoute();
   }, []);

   document.title = '로그인';
   return (
      <main className="flex items-center justify-center h-screen gradient-background">
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
