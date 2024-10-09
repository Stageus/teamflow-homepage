import { useState } from 'react';
import { DefaultButton } from '@shared/ui';
import { TextInput } from '@features/textInput';
import { useRoute } from '@shared/hooks';


export const Test = () => {
   const { loginRoute, teamspaceListRoute } = useRoute();
   const [open, setOpen] = useState(false);

   const onClickModal = () => setOpen(!open);

   return (
      <>
         {/* <div>test페이지</div> */}
         {/* <h1>반응형 테스트</h1> */}
         {/* <DefaultButton type="default" onClick={() => console.log('실행')} text="테스트" /> */}
         {/* <DefaultButton type="notSelected" onClick={() => console.log('실행')} text="테스트" /> */}
         {/* <DefaultButton type="active" onClick={() => console.log('실행')} text="테스트" /> */}
         {/* <DefaultButton type="disabled" onClick={() => console.log('실행')} text="테스트" /> */}
         {/* <DefaultButton type="danger" onClick={() => console.log('실행')} text="테스트" /> */}

         <DefaultButton text="모달창 오픈" type="active" onClick={onClickModal} />
         
         {/* <div className="w-aside">
            <TextInput
               title="useEmail@gmail.com"
               regex={/^[가-힣a-zA-Z0-9]{3,10}$/}
               errorText="3글자 이상 ~ 10글자 이하 (한글/영어/숫자)"
               placeholder="3글자 이상 ~ 10글자 이하 (한글/영어/숫자)만 가능합니다"
               nextName="가입하기"
               nextCallback={teamspaceListRoute}
               cancellName='뒤로가기'
               cancellCallback={loginRoute}
               ></TextInput>
         </div> */}
         <div className="w-full">
            <h1>
            Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we?
            Maybe the person writing this is an alien. You will never know.
            </h1>
            <h2>
            Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we?
            Maybe the person writing this is an alien. You will never know.
            </h2>
            <p>
            Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we?
            Maybe the person writing this is an alien. You will never know.
            </p>
            <span>
            Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we?
            Maybe the person writing this is an alien. You will never know.
            </span>
            <button>
            버튼
            </button>
         </div>              
      </>
   );
};
