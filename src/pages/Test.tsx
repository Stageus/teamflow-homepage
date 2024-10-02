import { DefaultButton } from '@shared/ui';

export const Test = () => {
   return (
    <>
        <div>test페이지</div>
        <h1>반응형 테스트</h1>
        <DefaultButton
            type='default'
            onClick={()=> console.log("실행")}
            text='테스트'
        />
        <DefaultButton
            type='notSelected'
            onClick={()=> console.log("실행")}
            text='테스트'
        />
        <DefaultButton
            type='active'
            onClick={()=> console.log("실행")}
            text='테스트'
        />
        <DefaultButton
            type='disabled'
            onClick={()=> console.log("실행")}
            text='테스트'
        />
        <DefaultButton
            type='danger'
            onClick={()=> console.log("실행")}
            text='테스트'
        />
    </>
   );
};
