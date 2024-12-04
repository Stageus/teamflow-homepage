// slice
import { useNickname } from './model/useNickname';
// layer
import { useRoute } from '@/shared/hooks/useRoute';
import serviceLogo from '@/shared/assets/logo.svg';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { cn } from '@/shared/lib/cn';

export const SignUp = () => {
   const { nickNameRef, isNickName, checkNickName } = useNickname();
   const { loginRoute, teamspaceListRoute } = useRoute();
   
   document.title = "회원가입"
   return (
      <div className="flex items-center justify-center h-screen gradient-light dark:gradient-dark">
         <div className="flex min-h-[300px] min-w-[400px] flex-col items-center justify-center gap-5 rounded-lg bg-transparent px-10 py-5 shadow-xl">
            <div className="w-20 h-20">
               <img src={serviceLogo} />
            </div>
            <h1>닉네임 생성</h1>
            {/* data  binding*/}
            <h2 className="text-shade_5">{'useEmail@gmail.com'}</h2>
            <div className="w-full">
               <Input
                  className={cn(
                     { 'border-error': isNickName === false },
                     { 'border-success': isNickName === true },
                  )}
                  variant="textInput"
                  type="text"
                  ref={nickNameRef}
                  onChange={checkNickName}
                  placeholder="사용할 닉네임을 입력해주세요"
               />
               <p
                  className={cn(
                     'py-1 text-sm text-error',
                     { 'text-error': isNickName === false },
                     { 'text-success': isNickName === true },
                  )}>
                  {isNickName !== null &&
                     (isNickName ? '사용 가능합니다' : '3글자 이상 ~ 10글자 이하 (한글/영어/숫자)만 가능합니다')}
               </p>
            </div>
            <div className="flex gap-3">
               <Button variant={isNickName ? 'select' : 'disabeld'} onClick={teamspaceListRoute}>
                  가입하기
               </Button>
               <Button variant="default" onClick={loginRoute}>
                  뒤로가기
               </Button>
            </div>
         </div>
      </div>
   );
};
