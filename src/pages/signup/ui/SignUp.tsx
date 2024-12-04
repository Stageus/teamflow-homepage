// package
import { useRef, useState } from 'react';
// layer
import { TextInput } from '@/features/textInput';
import { useRoute } from '@/shared/hooks/useRoute';
import serviceLogo from '@/shared/assets/logo.svg';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { cn } from '@/shared/lib/cn';
//test
import { MagnifyingGlassIcon} from '@radix-ui/react-icons';


export const SignUp = () => {
   const inputRef = useRef(null);
   const { loginRoute, teamspaceListRoute } = useRoute();

   const nickNameRef = useRef(null);
   const [text, setText] = useState(null);
   const changeText = () => {
      const regex = /^[가-힣a-zA-Z0-9]{3,10}$/;

      if (regex.test(nickNameRef.current.value)) setText(true);
      if (!regex.test(nickNameRef.current.value)) setText(false);
   };

   const searchRef = useRef(null);

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
            <div className="w-full">
               <Input
                  className={cn(
                     { 'border-error text-error': text === false },
                     { 'border-success text-success': text === true },
                  )}
                  variant="textInput"
                  type="text"
                  ref={nickNameRef}
                  onChange={changeText}
                  placeholder="사용할 닉네임을 입력해주세요"
               />
               <p
                  className={cn(
                     'py-1 text-sm text-error',
                     { 'text-error': text === false },
                     { 'text-success': text === true },
                  )}>
                  {text !== null &&
                     (text ? '사용 가능합니다' : '3글자 이상 ~ 10글자 이하 (한글/영어/숫자)만 가능합니다')}
               </p>
                  <Input
                     variant='searchInput'
                     asChild={true}
                     >
                        <div className='flex'>
                           <MagnifyingGlassIcon className='w-8 h-8 text-primary'/>
                           <input className='bg-transparent outline-none grow'/>
                           <Button variant='select'>권한변경</Button>
                        </div>
                     </Input>
               <div>
                  <Input
                     variant="searchInput"
                     type="text"
                     ref={searchRef}
                     onChange={changeText}
                     placeholder="닉네임 검색"
                  />
               </div>
            </div>
            <div className="flex gap-3">
               <Button variant="select" onClick={teamspaceListRoute}>
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
