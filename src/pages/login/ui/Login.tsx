import { useRoute } from "@shared/hooks";
import googleLogo from "../assets/google.svg";
import serviceLogo from "@shared/assets/logo.svg";

export const Login = () => {
   const { signupRoute } = useRoute();

   return (
      <div className="h-screen flex justify-center items-center gradient-light dark:gradient-dark">
         <div className="flex flex-col justify-center items-center gap-5 px-10 py-5 bg-transparent rounded-lg shadow-xl min-w-[300px] min-h-[300px]">
            <div className="w-20 h-20">
               <img src={serviceLogo}/>
            </div>
            <h1 className="italic">TeamFlow</h1>
            <h2 className="text-shade_5">TeamFlow에 오신것을 환영합니다!</h2>
            <button className='button-layout _active' onClick={signupRoute}>
               <div className="w-6 h-6">
                  <img src={googleLogo}/>
               </div>
               <span>Google 로그인</span>
            </button>
         </div>
      </div>
   );
};
